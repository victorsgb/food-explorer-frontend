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
  
  div.tags-wrapper {
    
    display: flex;
    align-items: center;
    gap: 1.6rem;

    height: 4.8rem;
    width: 100%;
    padding: 0 5%;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dark[800]};

    overflow-y: hidden;
    overflow-x: auto;

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
`;

export const Content = styled.div`

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 1.2rem;
  border-radius: 8px;
  white-space: nowrap;
 
  &.item {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.light[600]};
    
    * {
      color: ${({ theme }) => theme.light[100]};
    }
  }
  
  &.new {
    min-width: 12.0rem;
    max-width: 12.0rem;
    border: 1px dashed ${({ theme }) => theme.light[500]};

    * {
    color: ${({ theme }) => theme.light[500]};      
    }
  }

  svg {
    cursor: pointer;
  }
`;