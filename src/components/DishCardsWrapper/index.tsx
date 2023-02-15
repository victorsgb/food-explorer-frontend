// Styling related imports
import { Container, Content } from './styles';

// Type imports
import { DishProps } from '../../pages/Dish/New';

interface DishCardProps {
  admin?: boolean;
  dishData: DishProps;
}

export function DishCard({ admin, dishData }: DishCardProps){
  return (
    <Content>

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
        <h2>{category}</h2> }
      {dishesData && dishesData.map((item, index) => (
        <DishCard key={index}
          admin={admin}
          dishData={item}/> ))}
    </Container>
  );
}