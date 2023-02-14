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

  transition: background-color 200ms;

  &:enabled {
    
    color: ${({ theme }) => theme.light[100]};
    background-color: ${({ theme }) => theme.tints.tomato[100]};
        
    &:hover, &:focus {
      
      background-color: ${({ theme }) => theme.tints.tomato[400]};

    }
  }

  &:disabled {
    cursor: default;
  }
`;