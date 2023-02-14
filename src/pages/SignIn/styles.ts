import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 0 6.4rem;
  height: 100vh;

  header {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;

    margin-top: 15.8rem;
    margin-bottom: 7.3rem;

    h1 {
      color: ${({ theme }) => theme.light[100]};
    }
  }

  form {
    margin: 0 auto;
    height: fit-content;
    width: 80%;
    max-width: 47.6rem;
    padding: 6.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    background-color: transparent;
    border-radius: 1.6rem;

    h1 {
      opacity: 0;
      height: 0;
    }

    a {
      color: ${({ theme }) => theme.light[100]};
    }

    div.input, button, a {
      animation: down-top 1s forwards;
    }

    @keyframes down-top {
      0% {
        transform: translateY(0rem);
      }

      100% {
        transform: translateY(-6.4rem);
      }
    }

    transition: all 400ms;

    @media (min-width: 650px) {

      background-color: ${({ theme }) => theme.dark[700]};

      h1 {
        color: ${({ theme }) => theme.light[100]};

        animation: appear 1s forwards 0.5s;

        @keyframes appear {
          0% {
            opacity: 0;
          }

          50% {
          }

          100% {
            opacity: 1;
          }
        }
      }

      div.input, button, a {

        animation: top-down 1s forwards;

        @keyframes top-down {
          0% {
            transform: translateY(-6.4rem);
          }

          100% {
            transform: translateY(0rem);
          }
        }       
      }
    }
  }

  @media (min-width: 650px) {

    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    header {
      transform: translateY(-12.0rem);
    }
  }
`;