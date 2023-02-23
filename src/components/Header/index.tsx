// Core dependencies
import { useNavigate } from 'react-router-dom';

// Custom components and hooks
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Input } from '../Input';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

// Styling related imports
import { Container } from './styles';
import { logout, menu, order } from '../../assets';
import { FiSearch } from 'react-icons/fi';

export function Header() {

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function navigateToNewDishPage() {
    navigate('/dish-new');
  }

  function navigateToViewOrdersPage() {
    alert('Página de pedidos!');
  }

  function openMobileMenu() {

    const modal = document.querySelector('dialog#menu') as HTMLDialogElement;

    const content = document.querySelector('.content') as HTMLDivElement;
    console.log({content});
    content.style.overflowY = 'hidden';

    modal?.showModal();
  }

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <div className='left-elements'>
        <img className='menu'
          src={menu} alt=''
          onClick={openMobileMenu} />
        <Logo showAdmin={false} />
        <Input type='name'
          icon={FiSearch}
          placeholder='Busque por pratos ou ingredientes' />
        <img className={`order ${user?.admin ? 'admin' : ''}`} src={order} alt='' />      
      </div>
      <div className='right-elements'>
        <Button onClick={ user?.admin
          ? navigateToNewDishPage
          : navigateToViewOrdersPage }
          image={ !user?.admin ? order : '' }
          text= { user?.admin ? 'Novo prato' : 'Pedidos (0)'} />
        <img src={logout} alt=''
          onClick={handleSignOut} />
      </div>
      <Menu name='menu'/>
    </Container>
  );
}