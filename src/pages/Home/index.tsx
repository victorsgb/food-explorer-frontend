// Core dependencies
import { useEffect, useState } from 'react';

// External services
import { api } from '../../services/api';

// Custom components and hooks
import { Header } from '../../components/Header';
import { DishCardsWrapper } from '../../components/DishCardsWrapper';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../hooks/auth';

// Styling related imports
import { Container, Content } from './styles';
import { picture } from '../../assets';

// Type imports
import { DishProps } from '../Dish/New';

interface CategoryProps {
  id: string;
  category: string;
}

export function Home(){

  const { user } = useAuth();

  const [categories, setCategories] = useState<CategoryProps[]>();

  const [dishes, setDishes] = useState<DishProps[]>([]);

  useEffect(() => {

    async function fetchCategories(){
      const response = await api.get('/categories');
      setCategories(response.data);
    }

    async function fetchDishes(){
      const response = await api.get('/dishes');
      setDishes(response.data);
    };

    fetchCategories();
    fetchDishes();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <div className="banner">
            <img src={picture} alt='Imagem de macarons e algumas folhas' />
            <div className="text">
              <h1 className='poppins-medium-500'>Sabores inigualáveis</h1>
              <p className='roboto-small-regular'>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
          { categories && categories.map((item, index) => (
            <DishCardsWrapper key={index}
              category={item.category}
              admin={user && user.admin}
              dishesData={dishes.filter(dish => dish.category_id === item.id)}  />
          ))}
        </main>
        <Footer />
      </Content>
    </Container>
  );
}