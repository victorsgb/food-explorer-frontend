import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;

  header {
    margin-top: 15.8rem;
  }

  form {
    margin: 0 auto;
    height: fit-content;
    width: 80%;
    max-width: 47.6rem;
    padding: 3%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    background-color: transparent;
    border-radius: 1.6rem;

    h1 {
      opacity: 0;
      height: 0;
      white-space: nowrap;
    }

    a {
      color: ${({ theme }) => theme.light[100]};
    }

    @media (min-width: 650px) {

      background-color: ${({ theme }) => theme.dark[700]};

      h1 {
        color: ${({ theme }) => theme.light[100]};
        opacity: 1;
      }

      div.input, button, a {
        transform: translateY(1.0rem);
      }
    }
  }

  @media (min-width: 650px) {

    height: 100vh;
    margin: 0 7%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    header {
      transform: translateY(-12.0rem);
    }
  }
`;