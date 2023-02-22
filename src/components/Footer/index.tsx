// Custom components and hooks
import { Logo } from '../Logo';
import useWindowDimensions from '../../hooks/windowDimensions';

// Styling related imports
import { Container } from './styles';

export function Footer(){

  const { width } = useWindowDimensions();

  return (
    <Container>
      <Logo />
      <p className={ width > 650
        ? 'roboto-smaller-regular'
        : 'dm-sans-regular-400' }>
        © 2023 - Todos os direitos reservados.
      </p>
    </Container>
  );
}