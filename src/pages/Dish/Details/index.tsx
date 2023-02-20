// Core dependencies
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// External services
import { api } from '../../../services/api';

// Custom components and hooks
import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';
import { useAuth } from '../../../hooks/auth';

// Styling related imports
import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';

// Type imports
import { DishProps } from '../../Dish/New';
import { BiMinus, BiPlus } from 'react-icons/bi';

export function DishDetails(){

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const [dishData, setDishData] = useState<DishProps>();
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [amount, setAmount] = useState<number>(1);

  function convertNumberToMoneyStr(value: string) {

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
  }

  function navigateToDishEditPage(dish_id: string | undefined) {
    if (dish_id) {
      navigate(`/dish-edit/${dish_id}`);
    }
  }

  function formatReaisAndCentsToBRLString(reais: number | undefined, cents: number | undefined) {

    if (reais && cents) {
      return convertNumberToMoneyStr(`${String(reais)}.${String(cents).padStart(2, '0')}`);    

    } else if (reais) {
      return convertNumberToMoneyStr(String(reais));
    }
  }

  function handleReduceAmount() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  function handleIncreaseAmount() {
    if (amount < 99) {
      setAmount(amount + 1);
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
                {user?.admin && 
                  <Button onClick={() => navigateToDishEditPage(dishData.id)}
                    text='Editar prato' /> }
                {!user?.admin &&
                  <div className='order-wrapper'>
                    <BiMinus size={18} onClick={handleReduceAmount} />
                    <span className='roboto-big-bold'>
                      {String(amount).padStart(2, '0')}
                    </span>
                    <BiPlus size={18} onClick={handleIncreaseAmount} />
                    <Button text={`incluir - ${formatReaisAndCentsToBRLString(amount * Number(dishData.reais), amount * Number(dishData.cents))} `} />
                  </div> }
              </div>
            </div> }
        </main>
        <Footer />
      </Content>
    </Container>
  );
}