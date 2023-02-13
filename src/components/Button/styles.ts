import styled from 'styled-components';

export const Container = styled.button`
  padding: 1.2rem 3.2rem;
  margin: 3% auto;
  border-radius: 5px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border: 2px solid transparent;

  transition: all 400ms;

  &:enabled {

    color: ${({ theme }) => theme.colors.LIGHT_100};
    background-color: ${({ theme }) => theme.colors.TOMATO_100};
    
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.TOMATO_100};
      background-color: ${({ theme }) => theme.colors.LIGHT_100};
      border-color: ${({ theme }) => theme.colors.TOMATO_100};
    }
  }

  &:disabled {
    cursor: default;
  }
`;