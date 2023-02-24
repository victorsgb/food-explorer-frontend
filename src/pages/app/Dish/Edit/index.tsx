// Core dependencies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// External services
import { api } from '../../../../services/api';

// Custom components and hooks
import { Warning } from '../../../../components/Warning';
import { Modal } from '../../../../components/Modal';
import { Header } from '../../../../components/Header';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { TagsWrapper } from '../../../../components/TagsWrapper';
import { TextArea } from '../../../../components/TextArea';
import { Button } from '../../../../components/Button';
import { Footer } from '../../../../components/Footer';

// Styling related imports
import { Container, Content } from './styles';
import { FiChevronLeft, FiChevronDown, FiUpload, FiCheck } from 'react-icons/fi';

// Type related imports
import { CategoryProps } from '../../Home'
import { DishProps } from '../New';

export function DishEdit(){

  const params = useParams();

  const [categories, setCategories] = useState<CategoryProps[]>();

  const [dishData, setDishData] = useState<DishProps>({});

  const [dishImage, setDishImage] = useState<Blob>();

  const [dishImageIssue, setDishImageIssue] = useState<boolean>(false);

  const [ingredients, setIngredients] = useState<string[]>([]);

  const [isReady, setIsReady] = useState<boolean>(false);
  
  const [submitEditRequest, setSubmitEditRequest] = useState<boolean>(false);
  const [submitDeleteRequest, setSubmitDeleteRequest] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      category: categories?.filter(item => String(item.id) === event.target.value)[0].category
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

  async function handleEditDish(event: any) {
    event.preventDefault();

    const modal = document.querySelector('dialog#confirm-edit') as HTMLDialogElement;
    modal?.showModal();
  }

  async function handleDeleteDish(event: any) {
    event.preventDefault();

    const modal = document.querySelector('dialog#confirm-delete') as HTMLDialogElement;
    modal?.showModal();
  }

  useEffect(() => {
    async function fetchCategoriesAndDishData() {
      const response = await api.get('/categories');
      setCategories(response.data);

      const response_2 = await api.get(`/dishes/${params.dish_id}`);
      let dishDataFromApi = response_2.data;

      let categoryFromApi = response.data.filter((item: { id: any; }) => item.id === dishDataFromApi.category_id)[0].category;

      const categoryInput  = document.querySelector('#Categoria') as HTMLSelectElement;
      categoryInput.value = dishDataFromApi.category_id;

      function convertNumberToMoneyStr(value: string | undefined) {

        if(!value) {
          return ''; 
        }
  
        const commaSwappedByDotsString = String(value).replace(',', '.');
  
        let [reais, cents] = commaSwappedByDotsString.split('.');
  
        if (cents && cents.length === 1) {
          cents = String(Number(cents) * 10);
        }
  
        const splitString = reais.split('');
        const reverseArray = splitString.reverse();
        const joinString = reverseArray.join('');
  
        let reversedDottedString = joinString.replace(/.{3}/g, '$&.');
  
        if (reversedDottedString.length % 4 === 0) {
          reversedDottedString = reversedDottedString.substring(0, reversedDottedString.length -1);
        }
  
        const splitReversedString = reversedDottedString.split('');
        const reverseBackArray = splitReversedString.reverse();
        const finalString = reverseBackArray.join('');
        
        if (cents) {
          return 'R$ ' + finalString + ',' + cents.substring(0, 2).padStart(2, '0');
        
        } else {
          return 'R$ ' + finalString + ',00';
  
        }
      };
  
      function handleMoneyInputOnBlur(cost: string | undefined) {
        const moneyInput  = document.querySelector('#money-input') as HTMLInputElement;
    
        moneyInput.type = 'text'
        moneyInput.value = convertNumberToMoneyStr(cost) as string;
      };
  
      let cost = `${String(dishDataFromApi.reais)}.${String(dishDataFromApi.cents).padStart(2, '0')}`

      handleMoneyInputOnBlur(cost);

      setDishData({
        category: categoryFromApi,
        dish: dishDataFromApi.dish,
        description: dishDataFromApi.description,
        cost
      })

      const response_3 = await api.get(`/ingredients/${params.dish_id}`);

      setIngredients(response_3.data);
    }  

    fetchCategoriesAndDishData();
  }, [params]);

  useEffect(() => {

    if (dishData.dish && dishData.cost && dishData.description) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }

  }, [dishData.dish, dishData.cost, dishData.description]);

  useEffect(() => {

    async function handleSubmitEditRequest() {

      setApiResponse('');
      setIsLoading(true);

      let fileUploadForm = new FormData();

      if (dishImage) {
        fileUploadForm.append('image', dishImage as Blob);
      }

      try {

        await api.put(`/dishes/${params.dish_id}?category=${dishData.category}&dish=${dishData.dish}&ingredients=${ingredients}&cost=${dishData.cost}&description=${dishData.description}`, fileUploadForm );

        const modal = document.querySelector('dialog#inform-edit') as HTMLDialogElement;
        modal?.showModal();
       
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

    if (submitEditRequest) {
      handleSubmitEditRequest();
      setSubmitEditRequest(false);
    }

  }, [submitEditRequest, dishImage, dishData, ingredients, params]);

  useEffect(() => {

    async function handleSubmitDeleteRequest() {

      setApiResponse('');
      setIsLoading(true);

      try {

        await api.delete(`/dishes/${params.dish_id}` );

        const modal = document.querySelector('dialog#inform-delete') as HTMLDialogElement;
        modal?.showModal();
        
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
      setSubmitEditRequest(false);
    }

  }, [submitDeleteRequest, params]);

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
              onChange={handleNameChange}
              defaultValue={dishData?.dish} />
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
              onChange={handlePriceChange}
              defaultValue={dishData?.cost} />
            <TextArea label='Descrição'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={handleDescriptionChange}
              defaultValue={dishData?.description} />
            <div className='buttons-wrapper'>
              <Button kind='delete-button'
                disabled={isLoading}
                onClick={handleDeleteDish}
                text='Excluir prato' />
              <Button disabled={!isReady}
                isLoading={isLoading}
                onClick={handleEditDish}
                text='Salvar alterações' />
            </div>
          </form>
          <Modal
            name='confirm-edit'
            type='confirm'
            message='Você está pronto(a) para editar este prato?'
            userDecisionSetter={setSubmitEditRequest}
          />
          <Modal
            name='confirm-delete'
            type='confirm'
            message='Você tem certeza de que quer excluir este prato do sistema?'
            userDecisionSetter={setSubmitDeleteRequest}
          />                 
          <Modal
            name='inform-edit'
            type='inform'
            message={`Prato editado com sucesso! 😊`}
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