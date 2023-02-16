// Core dependencies
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// External services
import { api } from '../../../services/api';

// Custom components and hooks
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { useAuth } from '../../../hooks/auth';

// Styling related imports
import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';

// Type imports
import { DishProps } from '../../Dish/New';
import { Button } from '../../../components/Button';

export function DishDetails(){

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const [dishData, setDishData] = useState<DishProps>();
  const [ingredients, setIngredients] = useState<string[]>([]);

  function navigateToDishEditPage(dish_id: string | undefined) {
    if (dish_id) {
      navigate(`/dish-edit/${dish_id}`);
    }
  }

  useEffect(() => {

    async function fetchDishData(dish_id: string | undefined) {
      if (dish_id) {
        const response = await api.get(`/dishes/${dish_id}`);
        setDishData(response.data);
      }
    };

    async function fetchIngredientsData(dish_id: string | undefined) {
      if (dish_id) {
        const response = await api.get(`/ingredients/${dish_id}`);
        setIngredients(response.data);
      }
    };

    fetchDishData(params.dish_id);
    fetchIngredientsData(params.dish_id);

  }, [params]);

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Link to='/'>
            <FiChevronLeft size={32}/>
            <span className='poppins-bold-300'>voltar</span>
          </Link>
          { dishData && 
            <div className='details'>
              <img src={`${api.defaults.baseURL}/files/${dishData.image}`}
                alt='Imagem do prato' />
              <div>
                <h1 className='poppins-medium-500'>
                  {dishData.dish}
                </h1>
                <h2 className='poppins-regular-300'>
                  {dishData.description}
                </h2>
                <ul className='tags-wrapper'>
                  { ingredients.map((item, index) => (
                    <li key={index}
                      className='poppins-medium-100'>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => navigateToDishEditPage(dishData.id)}>
                  <span className='poppins-medium-100'>
                    Editar prato
                  </span>
                </Button>
              </div>
            </div> }
        </main>
        <Footer />
      </Content>
    </Container>
  );
}