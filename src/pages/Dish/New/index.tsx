// Core dependencies
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// External services
import { api } from '../../../services/api';

// Custom components and hooks
import { Warning } from '../../../components/Warning';
import { Modal } from '../../../components/Modal';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { TagsWrapper } from '../../../components/TagsWrapper';
import { TextArea } from '../../../components/TextArea';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';

// Styling related imports
import { Container, Content } from './styles';
import { FiChevronLeft, FiChevronDown, FiUpload, FiCheck } from 'react-icons/fi';

export interface DishProps {
  category?: string;
  category_id?: string;
  dish?: string;
  cost?: string;
  description?: string;
}

export function DishNew(){

  const navigate = useNavigate();

  const [categories, setCategories] = useState<string[]>();

  const [dishData, setDishData] = useState<DishProps>({});

  const [dishImage, setDishImage] = useState<Blob>();

  const [dishImageIssue, setDishImageIssue] = useState<boolean>(false);

  const [ingredients, setIngredients] = useState<string[]>([]);

  const [isReady, setIsReady] = useState<boolean>(false);
  
  const [submitRequest, setSubmitRequest] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [successCounter, setSuccessCounter] = useState<number>(-1);
  const [apiResponse, setApiResponse] = useState<string>('');

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    const [filetype, ] = file.type.split('/');

    if (filetype === 'image') {
      setDishImage(file);
      setDishImageIssue(false);
    } else {
      setDishImageIssue(true);
    }
  }

  function handleNameChange(event: any) {
    setDishData(dishData => ({
      ...dishData,
      dish: event.target.value
    }))
  }

  function handleCategoryChange(event: any) {
    setDishData(dishData => ({
      ...dishData,
      category: event.target.value
    }))
  }

  function handlePriceChange(event: any) {
    setDishData(dishData => ({
      ...dishData,
      cost: event.target.value
    }))
  }

  function handleDescriptionChange(event: any) {
    setDishData(dishData => ({
      ...dishData,
      description: event.target.value
    }))
  }

  async function handleCreateNewDish(event: any) {
    event.preventDefault();

    const modal = document.querySelector('dialog#confirm-create') as HTMLDialogElement;
    modal?.showModal();
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('/categories');
      setCategories(response.data.map((categories: { category: any; }) => categories.category));

      setDishData(dishData => ({
        ...dishData,
        category: response.data[0].category
      }));
    }

    fetchCategories();
  }, []);

  useEffect(() => {

    if (dishData.dish && dishData.cost && dishData.description) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }

  }, [dishData.dish, dishData.cost, dishData.description]);

  useEffect(() => {

    async function handleSubmitRequest() {

      setApiResponse('');
      setIsLoading(true);

      let fileUploadForm = new FormData();
      fileUploadForm.append('image', dishImage as Blob);

      try {

        await api.post(`/dishes?category=${dishData.category}&dish=${dishData.dish}&ingredients=${ingredients}&cost=${dishData.cost}&description=${dishData.description}`, fileUploadForm );

        const modal = document.querySelector('dialog#inform-create') as HTMLDialogElement;
        modal?.showModal();

        // set value to navigate to SignIn page after three seconds...
        setSuccessCounter(3);
        
      } catch(error: any) {
        if (error.response) {
          setApiResponse(error.response.data.message);
        } else if (error.request) {
          setApiResponse(error.request);
        } else {
          setApiResponse('Servidor indisponível. Tente mais tarde...');
        }
      }
      
      setIsLoading(false);
    }

    if (submitRequest) {
      handleSubmitRequest();
      setSubmitRequest(false);
    }

  }, [submitRequest, dishImage, dishData, ingredients]);


  useEffect(() => {
    if (successCounter > 0) {
      const interval = setInterval(() => {
        setSuccessCounter(prevState => prevState - 1);
      }, 1000);
      return () => clearInterval(interval);
    }

    if (successCounter === 0) {
      navigate('/');
    }
  }, [successCounter, navigate]);

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Link to='/'>
            <FiChevronLeft size={32}/>
            <span className='poppins-bold-300'>voltar</span>
          </Link>
          <h1 className='poppins-medium-400'>
            Adicionar prato
          </h1>
          <form>
            <Input type='file'
              label='Imagem do prato'
              placeholder={dishImage ? '' : 'Selecione imagem'}
              icon={dishImage ? FiCheck : FiUpload}
              onChange={handleImageChange}/>
            <Input type='name'
              label='Nome'
              placeholder='Ex.: Salada Caesar'
              autoComplete='off'
              onChange={handleNameChange} />
            <Select label='Categoria'
              options={categories}
              icon={FiChevronDown}
              onChange={handleCategoryChange} />
            <TagsWrapper className='ingredients'
              label='Ingredientes'
              tags={ingredients}
              tagsSetter={setIngredients} />
            <Input type='money'
              label='Preço'
              placeholder='R$ 0,00'
              autoComplete='off'
              onChange={handlePriceChange} />
            <TextArea label='Descrição'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={handleDescriptionChange} />
            <div className='buttons-wrapper'>
              <Button disabled={!isReady}
                isLoading={isLoading}
                onClick={handleCreateNewDish} >
                <span className='poppins-medium-100'>
                  Salvar alterações
                </span>
              </Button>
            </div>
          </form>
          <Modal
            name='confirm-create'
            type='confirm'
            message='Você está pronto(a) para cadastrar um novo prato?'
            userDecisionSetter={setSubmitRequest}
          />      
          <Modal
            name='inform-create'
            type='inform'
            message={`Prato cadastrado com sucesso! 😊`}
          />
        </main>
        <Footer />
        { !isLoading && dishImageIssue &&
        <Warning type='api-bad-response'
          response={'Você só pode fazer upload de um arquivo de imagem!'} /> }        
        { !isLoading && apiResponse &&
        <Warning type='api-bad-response'
          response={apiResponse} /> }  
      </Content>
    </Container>
  );
}