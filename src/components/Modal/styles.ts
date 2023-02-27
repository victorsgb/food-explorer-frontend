import styled from 'styled-components';

export const Container = styled.dialog`

  margin: 0 auto;
  padding: 3% 3% 0% 3%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);

  font-size: 1.6rem;
  
  border: none;
  border-radius: 5px;

  &::backdrop {
    background-color: rgb(0 0 0 /.5);
  }

  div.buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      margin: 3%;
      max-width: 12.0rem;
    }
  }
`;