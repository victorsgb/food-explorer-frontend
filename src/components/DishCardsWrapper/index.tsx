// Core dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactSimplyCarousel from 'react-simply-carousel';

// External services
import { api } from '../../services/api';

// Custom components and hooks
import { Button } from '../Button';
import useWindowDimensions from '../../hooks/windowDimensions';

// Styling related imports
import { Container, Content } from './styles';
import { pencil, heart, right, left } from '../../assets';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { GoChevronRight } from 'react-icons/go';

// Type imports
import { DishProps } from '../../pages/Dish/New';

interface DishCardProps {
  admin?: boolean;
  dishData: DishProps;
  device: 'desktop' | 'mobile';
}

export function DishCard({ admin, dishData, device }: DishCardProps){

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
    <Content className={device}>
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
  
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const { width } = useWindowDimensions();

  return (
    <Container>
      { (dishesData && dishesData.length > 0) &&
        <>
          <h2 className='poppins-medium-400'>{category}</h2>
          { width >= 650 && 
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              forwardBtnProps={{
                style: {
                  alignSelf: 'center',
                  background: 'rgba(0, 10, 15, 0.272541)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '25px',
                  height: '100%',
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <img src={right} alt='' />,
              }}
              backwardBtnProps={{
                style: {
                  alignSelf: 'center',
                  background: 'rgba(0, 10, 15, 0.272541)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '25px',
                  height: '100%',
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <img src={left} alt='' />,
              }}
              responsiveProps={[
                {
                  itemsToShow: 3,
                  itemsToScroll: 3,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"           
            >
              {dishesData && dishesData.map((item, index) => (
                <DishCard key={index}
                  admin={admin}
                  dishData={item}
                  device='desktop' />
              ))}
            </ReactSimplyCarousel> }
          { width < 650 && 
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              forwardBtnProps={{
                style: {
                  alignSelf: 'center',
                  background: 'rgba(0, 10, 15, 0.272541)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '25px',
                  height: '100%',
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                }
              }}
              backwardBtnProps={{
                style: {
                  alignSelf: 'center',
                  background: 'rgba(0, 10, 15, 0.272541)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '25px',
                  height: '100%',
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                }
              }}
              responsiveProps={[
                {
                  itemsToShow: 2,
                  itemsToScroll: 2,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"           
            >
              {dishesData && dishesData.map((item, index) => (
                <DishCard key={index}
                  admin={admin}
                  dishData={item}
                  device={width >= 650 ? 'desktop' : 'mobile'} />
              ))}
            </ReactSimplyCarousel> }
        </> }

    </Container>
  );
}

