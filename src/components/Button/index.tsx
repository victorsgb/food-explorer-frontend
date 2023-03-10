// Core dependencies
import React from 'react';

// Custom components
import { Loading } from '../Loading';

// Styling related imports
import { Container } from './styles';

// Type imports
import { IconType } from 'react-icons';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  image: string;
  icon: IconType;
  kind: 'delete' | undefined;
  isLoading: boolean;
}

export function Button({ text, image, icon: Icon, isLoading, kind, ...rest }: ButtonProps | any) {
  return (
    <Container className={kind} {...rest} >
      { !isLoading && image &&
          <img src={image} alt='' /> }
      { !isLoading && Icon && 
        <Icon size={20} /> }
      { !isLoading && text &&
        <span className='poppins-medium-100'>
          {text}
        </span> }
      { isLoading && <Loading />}
    </Container>
  );
}