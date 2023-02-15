// Custom hooks
import { useAuth } from '../../hooks/auth';

// Styling related imports
import { Container } from './styles';
import { polygon } from '../../assets';

interface LogoProps {
  showAdmin?: boolean;
}

export function Logo({ showAdmin }: LogoProps) {

  const { user } = useAuth();

  return (
    <Container className='logo'>
      <img src={polygon}
        alt='Logotipo do FoodExplorer' />
      <div>
        <h1 className='roboto-giant-bold'>
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