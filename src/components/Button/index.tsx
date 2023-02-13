// Core dependencies
import React from 'react';

// Styling related imports
import { Container } from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
}

export function Button({ children, ...rest }: ButtonProps | any) {
  return (
    <Container
      {...rest}
    >
      {children}
    </Container>
  );
}