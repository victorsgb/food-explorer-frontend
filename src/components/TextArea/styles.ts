import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.light[400]};
    white-space: nowrap;
  }

  div.textarea-wrapper {

    display: flex;
    align-items: center;
    gap: 1.6rem;

    height: 7.2rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dark[800]};

    overflow-y: auto;

    textarea {
      resize: none;
      border: none;
      background-color: transparent;
      height: 100%;
      width: 100%;

      padding: 1.4rem;
      
      color: ${({ theme }) => theme.light[100]};

      &::placeholder {
        color: ${({ theme }) => theme.light[500]};
      }

      &:focus {
        outline: none;
      }
    }

  }

`;