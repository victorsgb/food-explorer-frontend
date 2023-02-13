import styled from 'styled-components';

export const Container = styled.button`
  padding: 1% 2%;
  margin: 3% auto;
  border-radius: 5px;
  width: 100%;
  max-width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 1.6rem;
  font-weight: 800;
  border: 1px solid transparent;
  border-bottom: 3px solid transparent;

  transition: all 400ms;

  &:enabled {
    
    &:hover, &:focus {
      color: white;
    }
  }

  &:disabled {
    cursor: default;
  }
`;