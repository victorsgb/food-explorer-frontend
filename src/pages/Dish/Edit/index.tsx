// Core dependencies
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
  id?: string;
  category?: string;
  category_id?: string;
  dish?: string;
  cost?: string;
  reais?: string;
  cents?: string;
  description?: string;
  image?: string;
}

export function DishEdit(){

  const navigate = useNavigate();
  const params = useParams();

  const [categories, setCategories] = useState<string[]>();

  const [dishData, setDishData] = useState<DishProps>({});

  const [dishImage, setDishImage] = useState<Blob>();

  const [dishImageIssue, setDishImageIssue] = useState<boolean>(false);

  const [ingredients, setIngredients] = useState<string[]>([]);

  const [isReady, setIsReady] = useState<boolean>(false);
  
  const [submitCreateRequest, setSubmitCreateRequest] = useState<boolean>(false);
  const [submitDeleteRequest, setSubmitDeleteRequest] = useState<boolean>(false);

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

  async function handleDeleteDish(event: any) {
    event.preventDefault();

    const modal = document.querySelector('dialog#confirm-delete') as HTMLDialogElement;
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

    async function handleSubmitCreateRequest() {

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

    if (submitCreateRequest) {
      handleSubmitCreateRequest();
      setSubmitCreateRequest(false);
    }

  }, [submitCreateRequest, dishImage, dishData, ingredients]);


  useEffect(() => {

    async function handleSubmitDeleteRequest() {

      setApiResponse('');
      setIsLoading(true);

      try {

        await api.delete(`/dishes/${params.dish_id}` );

        const modal = document.querySelector('dialog#inform-delete') as HTMLDialogElement;
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

    if (submitDeleteRequest) {
      handleSubmitDeleteRequest();
      setSubmitCreateRequest(false);
    }

  }, [submitDeleteRequest, dishImage, dishData, ingredients]);


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
            Editar prato
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
              <Button kind='delete-button'
                isLoading={isLoading}
                onClick={handleDeleteDish}
                text='Excluir prato' />
              <Button disabled={!isReady}
                isLoading={isLoading}
                onClick={handleCreateNewDish}
                text='Salvar alterações' />
            </div>
          </form>
          <Modal
            name='confirm-create'
            type='confirm'
            message='Você está pronto(a) para cadastrar um novo prato?'
            userDecisionSetter={setSubmitCreateRequest}
          />
          <Modal
            name='confirm-delete'
            type='confirm'
            message='Você tem certeza de que quer excluir este prato do sistema?'
            userDecisionSetter={setSubmitDeleteRequest}
          />                 
          <Modal
            name='inform-create'
            type='inform'
            message={`Prato cadastrado com sucesso! 😊`}
          />
          <Modal
            name='inform-delete'
            type='inform'
            message={`Prato excluído com sucesso! 😊`}
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