// Core dependencies
import React from 'react';

// Custom components
import { Loading } from '../Loading';

// Styling related imports
import { Container } from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
  isLoading: boolean;
}

export function Button({ isLoading, children, ...rest }: ButtonProps | any) {
  return (
    <Container
      {...rest}
    >
      { !isLoading && children}
      { isLoading && <Loading />}
    </Container>
  );
}