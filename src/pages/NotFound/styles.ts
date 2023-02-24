import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: 14.0rem auto;
  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  > main {
    padding: 3% 2% 2%;
    margin: 0 auto;
    max-width: 960px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    article {

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3%;

      animation: components_varying_hover 10s infinite;

      h1 {
        color: ${({ theme }) => theme.light[600]};
        font-size: 2.0rem;
        margin-bottom: 2.0rem;
      }

      h2 {
        color: ${({ theme }) => theme.light[200]};
        text-align: center;
      }

      svg {
        margin-bottom: 3%;
        animation: spin-forever 1s;
      }

      a {
        color: ${({ theme }) => theme.tints.cake[200]};
        font-size: 1.4rem;
      }

      transition: all 400ms;

      @keyframes spin-forever {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
`;