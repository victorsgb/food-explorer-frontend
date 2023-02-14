import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.light[400]};
  }

  div.input-wrapper {

    display: flex;
    align-items: center;
    gap: 1.6rem;

    width: 100%;
    padding: 1.6rem 5%;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dark[900]};

    svg.icon {
      color: ${({ theme }) => theme.light[400]};
    }

    input {
  
      border: none;
      background-color: transparent;
      width: 100%;

      color: ${({ theme }) => theme.light[100]};
  
      &::placeholder {
        color: ${({ theme }) => theme.light[500]};
      }

      &:focus {
        outline: none;
      }
    }

    &:focus-within {
      outline: 2px solid ${({ theme }) => theme.light[100]}
 
    }
          
    &:focus {
      outline: 2px solid ${({ theme }) => theme.light[100]}
    }

  }

`;