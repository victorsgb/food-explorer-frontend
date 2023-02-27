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
  width: 80%;

  &::backdrop {
    background-color: rgb(0 0 0 /.5);
  }

  div.buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 1.0rem;

    button {
      max-width: 12.0rem;
    }
  }
`;