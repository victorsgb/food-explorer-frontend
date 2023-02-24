// Core dependencies
import { Link } from 'react-router-dom';

// Custom components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// Styling related imports
import { Container, Content } from './styles';
import { FcHighPriority } from 'react-icons/fc';

export function NotFound() {

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <article>
              <>
                <h1 className='poppins-medium-100'>Algo inesperado ocorreu!</h1>
                <h2 className='roboto-small-regular'>Você pode ter sido desconectado por falta de uso do site, ou acessou uma página inexistente.</h2>
                <FcHighPriority size={120}/>
                <Link to='/'><span className='roboto-small-regular'>Direcionar para página principal</span></Link>
              </>
          </article>
        </main>
        <Footer />
      </Content>
    </Container>
  );
}