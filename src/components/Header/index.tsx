// Core dependencies
import { useNavigate } from 'react-router-dom';

// Custom components and hooks
import { Logo } from '../Logo';
import { Input } from '../Input';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

// Styling related imports
import { Container } from './styles';
import { order } from '../../assets';
import { FiSearch, FiLogOut } from 'react-icons/fi';

export function Header() {

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function navigateToNewDishPage() {
    navigate('/dish-new');
  }

  function navigateToViewOrdersPage() {
    alert('Página de pedidos!');
  }

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <div className='left-elements'>
        <Logo showAdmin={true} />
        <Input type='name'
          icon={FiSearch}
          placeholder='Busque por pratos ou ingredientes' />
      </div>
      <div className='right-elements'>
        <Button onClick={ user?.admin
          ? navigateToNewDishPage
          : navigateToViewOrdersPage }
          image={ !user?.admin ? order : '' }
          text= { user?.admin ? 'Novo prato' : 'Pedidos (0)'} />
        <FiLogOut onClick={handleSignOut} 
          size={22} color='#fff' />
      </div>
    </Container>
  );
}