// Core dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// External services
import { api } from '../../services/api';

// Core components
import { Button } from '../Button';

// Styling related imports
import { Container, Content } from './styles';
import { pencil, heart } from '../../assets';
import { BiMinus, BiPlus} from 'react-icons/bi';
import { GoChevronRight } from 'react-icons/go';

// Type imports
import { DishProps } from '../../pages/Dish/New';

interface DishCardProps {
  admin?: boolean;
  dishData: DishProps;
}

export function DishCard({ admin, dishData }: DishCardProps){

  const navigate = useNavigate();
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

  function formatReaisAndCentsToBRLString(reais: string | undefined, cents: string | undefined) {

    if (reais && cents) {
      return convertNumberToMoneyStr(`${reais}.${String(cents).padStart(2, '0')}`);    

    } else if (reais) {
      return convertNumberToMoneyStr(reais);
    }
  }

  function navigateToEditPage(id: string | undefined) {
    if (id) navigate(`/dish-edit/${id}`);
  }

  function navigateToDetailsPage(id: string | undefined) {
    if (id) navigate(`/dish-details/${id}`);
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

  return (
    <Content>
      { admin
        ? <img className='icon' src={pencil} alt=''
          onClick={() => navigateToEditPage(dishData.id)} />
        : <img className='icon' src={heart} alt='' /> }
      <div className='details'
        onClick={() => navigateToDetailsPage(dishData.id)} >
        <img src={`${api.defaults.baseURL}/files/${dishData.image}`} alt='Imagem do prato' />
        <h3> {dishData.dish} <GoChevronRight /></h3>
        <p className='roboto-smaller-regular'>{dishData.description && dishData.description.length > 70 ? dishData.description?.substring(0, 70)+'...' : dishData.description}</p>
        <h4>
          {formatReaisAndCentsToBRLString(dishData.reais, dishData.cents)}
        </h4>
      </div>
      { !admin && 
        <div className='order-wrapper'>
          <BiMinus size={18} onClick={handleReduceAmount} />
          <span className='roboto-big-bold'>
            {String(amount).padStart(2, '0')}
          </span>
          <BiPlus size={18} onClick={handleIncreaseAmount} />
          <Button text='incluir' />
        </div> }
    </Content>
  );
}

export interface DishCardsWrapperProps {
  category: string;
  admin?: boolean;
  dishesData: DishProps[]
}

export function DishCardsWrapper({ category, admin, dishesData }: DishCardsWrapperProps){

  return (
    <Container>
      { (dishesData && 
        dishesData.length > 0) &&
        <h2 className='poppins-medium-400'>{category}</h2> }
      <div className="cards-wrapper">
        {dishesData && dishesData.map((item, index) => (
          <DishCard key={index}
            admin={admin}
            dishData={item}/> ))}
      </div>
    </Container>
  );
}