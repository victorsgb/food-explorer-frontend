import styled from 'styled-components';

export const Container = styled.button`
  padding: 1.2rem 3%;
  margin: 3% auto;
  border-radius: 5px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border: 2px solid transparent;

  transition: background-color 400ms;
  transition: color 400ms;
  transition: border-color 400ms;

  &:enabled {

    color: ${({ theme }) => theme.light[100]};
    background-color: ${({ theme }) => theme.tints.tomato[100]};
    
    &:hover, &:focus {
      color: ${({ theme }) => theme.tints.tomato[100]};
      background-color: ${({ theme }) => theme.light[100]};
      border-color: ${({ theme }) => theme.tints.tomato[100]};
    }
  }

  &:disabled {
    cursor: default;
  }
`;