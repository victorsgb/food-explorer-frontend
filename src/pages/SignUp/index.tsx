// Core dependencies
import { Link } from 'react-router-dom';

// Custom components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Styling related imports
import { Container } from './styles';
import { polygon } from '../../assets';

export function SignUp(){
  return (
    <Container>
      <header>
        <img src={polygon}
          alt='Logotipo do FoodExplorer' />
        <h1 className='roboto-giant-bold'>
          food explorer
        </h1>
      </header>

      <form>
        <h1 className='poppins-medium-400'>Crie sua conta</h1>
        <Input type='name'
          label='Nome'
          placeholder='Exemplo: Maria' />
        <Input type='email'
          label='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br' />
        <Input type='password'
          label='Senha'
          placeholder='No mínimo 6 caracteres' />
        <Button>
          <span className='poppins-medium-100'>Criar conta</span>
        </Button>
        <Link to={'/'} className='poppins-medium-100'>Já tenho uma conta</Link>
      </form>
    </Container>
  );
}