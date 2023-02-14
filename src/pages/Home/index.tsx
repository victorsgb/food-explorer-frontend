// Custom components and hooks
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// Styling related imports
import { Container, Content } from './styles';
import { picture } from '../../assets';

export function Home(){

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <div className="banner">
            <img src={picture} alt='Imagem de macarons e algumas folhas' />
            <div className="text">
              <h1 className='poppins-medium-500'>Sabores inigualáveis</h1>
              <p className='roboto-small-regular'>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </main>
        <Footer />
      </Content>
    </Container>
  );
}