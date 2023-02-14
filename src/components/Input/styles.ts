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
    padding: 1.4rem 1.6rem;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dark[900]};

    &::placeholder {
      color: ${({ theme }) => theme.light[500]};
    }
  }
`;