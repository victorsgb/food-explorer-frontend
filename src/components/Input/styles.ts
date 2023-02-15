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

    height: 4.8rem;
    width: 100%;
    padding: 0 5%;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dark[900]};

    overflow-y: auto;

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

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;

      border: none;
      background-color: transparent;
      width: 100%;

      color: ${({ theme }) => theme.light[500]};
  
      &::placeholder {
        color: ${({ theme }) => theme.light[500]};
      }

      &:focus {
        outline: none;
      }

      option {
        color: ${({ theme }) => theme.dark[100]};
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;

      * {
        color: ${({ theme }) => theme.light[100]};
      }

      input {
        width: 0;
        background-color: red;
        &[type='file'] {
          color: transparent;
          &::-webkit-file-upload-button {
            visibility: hidden;
          }
        }
      }
    }

    &:focus-within {
      outline: 2px solid ${({ theme }) => theme.light[100]}
    }
          
    &:focus {
      outline: 2px solid ${({ theme }) => theme.light[100]}
    }

  }

  div.multiline {

    display: flex;
    align-items: center;
    height: 17.2rem;
    width: 100%;
    padding: 0;

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