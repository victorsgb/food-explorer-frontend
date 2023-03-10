// Core dependencies
import { useNavigate } from 'react-router-dom';

// Custom components and hooks
import { Input } from '../Input';
import { Footer } from '../Footer';
import { useAuth } from '../../hooks/auth';

// Styling related imports
import { Container } from './styles';
import { close } from '../../assets';
import { FiSearch } from 'react-icons/fi';

interface MobileMenuProps {
  name: string;
  searchSetter?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function Menu({name, searchSetter}: MobileMenuProps) {

  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleQuitMenu(event: any) {
    const modal = document.querySelector('nav#menu') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  }

  function navigateToNewDishPage() {
    navigate('/dish-new');
  }

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  function handleSearchChange(event: any) {
    if (searchSetter) {
      searchSetter(event.target.value);
    }
  }

  return (
    <Container id={name}>
      <header>
        <div>
          <img src={close} alt=''
            onClick={handleQuitMenu}/>
          <span className='roboto-small-spaced'>Menu</span>
        </div>
      </header>
      <div className='content'>
        <main>
          <Input type='name'
              icon={FiSearch}
              placeholder='Busque por pratos ou ingredientes'
              onChange={handleSearchChange} />
          <ul>
            { user && Number(user.admin) === 1 && 
              <li className='poppins-regular-300' onClick={navigateToNewDishPage}>Novo prato</li> }
            <li className='poppins-regular-300' onClick={handleSignOut}>Sair</li>
          </ul>
        </main>
      </div>
      <div className='empty-space' />
      <Footer />
    </Container>
  )
}