// Custom hooks
import { useAuth } from '../../hooks/auth';
import useWindowDimensions from '../../hooks/windowDimensions';

// Styling related imports
import { Container } from './styles';
import { polygon } from '../../assets';

interface LogoProps {
  showAdmin?: boolean;
}

export function Logo({ showAdmin }: LogoProps) {

  const { user } = useAuth();
  const { width } = useWindowDimensions();

  return (
    <Container className='logo'>
      <img src={polygon}
        alt='Logotipo do FoodExplorer' />
      <div>
        <h1 className={ width > 650 
          ? 'roboto-bigger-bold'
          : 'roboto-smaller-bold' }>
          food explorer
        </h1>
        { user && user.admin && showAdmin &&
          <span className='roboto-smallest-regular'>
            admin
          </span> }
      </div>
    </Container>
  );
}