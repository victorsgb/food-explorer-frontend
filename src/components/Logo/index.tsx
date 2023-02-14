// Styling related imports
import { Container } from './styles';
import { polygon } from '../../assets';

export function Logo() {
  return (
    <Container className='logo'>
      <img src={polygon}
        alt='Logotipo do FoodExplorer' />
      <h1 className='roboto-giant-bold'>
        food explorer
      </h1>
    </Container>
  );
}