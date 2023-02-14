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

  input {
    width: 100%;
    padding: 1.6rem 5%;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dark[900]};
    color: ${({ theme }) => theme.light[100]};

    &::placeholder {
      color: ${({ theme }) => theme.light[500]};
    }
  }
`;