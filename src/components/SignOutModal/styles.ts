import styled from 'styled-components';

export const Container = styled.dialog`

  margin: 0 auto;
  padding: 3% 3% 0% 3%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);

  font-size: 1.6rem;

  border-radius: 5px;
  box-shadow: 0 0 1em rgb(0 0 0 /.3);
  width: 80%;

  &::backdrop {
    background-color: rgb(0 0 0 /.5);
  }

  div.buttons-wrapper {
    display: flex;
  }
`;