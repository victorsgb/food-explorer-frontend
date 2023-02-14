// Custom components
import { Logo } from '../Logo';

// Styling related imports
import { Container } from './styles';

export function Footer(){
  return (
    <Container>
      <Logo />
      <p className='roboto-smaller-regular'>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}