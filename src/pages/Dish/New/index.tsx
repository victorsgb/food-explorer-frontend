// Core dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom components and hooks
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Footer } from '../../../components/Footer';

// Styling related imports
import { Container, Content } from './styles';
import { FiChevronLeft, FiChevronDown, FiUpload } from 'react-icons/fi';

export function DishNew(){

  const [categories, setCategories] = useState<string[]>(['cat1', 'cat2', 'cat3']);

  const [price, setPrice] = useState<string>();

  function handlePriceChange(event: any) {
    setPrice(event.target.value);
  }
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Link to='/'>
            <FiChevronLeft size={32}/>
            <span className='poppins-bold-300'>voltar</span>
          </Link>
          <h1 className='poppins-medium-400'>
            Adicionar prato
          </h1>
          <form>
            <Input type='file'
              label='Imagem do prato'
              placeholder='Selecione imagem'
              icon={FiUpload} />
            <Input type='name'
              label='Nome'
              placeholder='Ex.: Salada Caesar' />
            <Input type='select'
              label='Categoria'
              options={categories}
              icon={FiChevronDown} />
            <div id='ingredients'></div>
            <Input type='money'
              label='Preço'
              placeholder='R$ 0,00'
              onChange={handlePriceChange} />
            <Input type='multiline'
              label='Descrição'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
            <div className='buttons-wrapper'></div>
          </form>

        </main>
        <Footer />
      </Content>
    </Container>
  );
}