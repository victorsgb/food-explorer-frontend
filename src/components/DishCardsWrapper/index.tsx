// Core dependencies
import { useNavigate } from 'react-router-dom';

// External services
import { api } from '../../services/api';

// Styling related imports
import { Container, Content } from './styles';
import { BsPencilSquare, BsHeart } from 'react-icons/bs';
import { GoChevronRight } from 'react-icons/go';

// Type imports
import { DishProps } from '../../pages/Dish/New';

interface DishCardProps {
  admin?: boolean;
  dishData: DishProps;
}

export function DishCard({ admin, dishData }: DishCardProps){

  const navigate = useNavigate();

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

  return (
    <Content>
      { admin
        ? <BsPencilSquare size={24}
          onClick={() => navigateToEditPage(dishData.id)} />
        : <BsHeart size={24} /> }
      <div className='details'
        onClick={() => navigateToDetailsPage(dishData.id)} >
        <img src={`${api.defaults.baseURL}/files/${dishData.image}`} alt='Imagem do prato' />
        <h3 className='poppins-bold-300'>{dishData.dish} <GoChevronRight /></h3>
        <p className='roboto-smaller-regular'>{dishData.description}</p>
        <h4 className='roboto-biggest-regular'>
          {formatReaisAndCentsToBRLString(dishData.reais, dishData.cents)}
        </h4>
      </div>
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