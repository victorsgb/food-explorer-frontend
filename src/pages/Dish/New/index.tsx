// Core dependencies
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// External services
import { api } from '../../../services/api';

// Custom components and hooks
import { Warning } from '../../../components/Warning';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { TextArea } from '../../../components/TextArea';
import { Footer } from '../../../components/Footer';

// Styling related imports
import { Container, Content } from './styles';
import { FiChevronLeft, FiChevronDown, FiUpload, FiCheck } from 'react-icons/fi';
import { Button } from '../../../components/Button';

interface DishProps {
  category?: string;
  dish?: string;
  ingredients?: string[];
  cost?: string;
  description?: string;
}

interface DishImageProps {
  image?: string;
}

export function DishNew(){

  const [categories, setCategories] = useState<string[]>();

  const [dishData, setDishData] = useState<DishProps>({});
  const [dishImage, setDishImage] = useState<DishImageProps>();

  const [dishIssue, setDishIssue] = useState<boolean>(false);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    const [filetype, ] = file.type.split('/');

    if (filetype === 'image') {
      setDishImage(file);
      setDishIssue(false);
    } else {
      setDishImage(undefined);
      setDishIssue(true);
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

  function handleAddNewDish(event: any) {
    event.preventDefault();

    alert(JSON.stringify({dishData, dishImage}))
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
              onChange={handleNameChange} />
            <Select label='Categoria'
              options={categories}
              icon={FiChevronDown}
              onChange={handleCategoryChange} />
            <div id='ingredients'></div>
            <Input type='money'
              label='Preço'
              placeholder='R$ 0,00'
              onChange={handlePriceChange} />
            <TextArea label='Descrição'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={handleDescriptionChange} />
            <div className='buttons-wrapper'>
              <Button disabled={!isReady}
                isLoading={isLoading}
                onClick={handleAddNewDish} >
                <span className='poppins-medium-100'>
                  Salvar alterações
                </span>
              </Button>
            </div>
          </form>
        </main>
        <Footer />
        { !isLoading && dishIssue &&
        <Warning type='api-bad-response'
          response={'Você só pode fazer upload de um arquivo de imagem!'} /> }        
      </Content>
    </Container>
  );
}