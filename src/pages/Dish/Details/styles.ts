import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.div`
  grid-area: content; 
  width: 100%;
  
  overflow-y: auto;

  main {
    min-height: 100vh;
    margin: 2.4rem 8% 5.54rem;

    border: 1px solid yellow;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 2.4rem;

      color: ${({ theme }) => theme.light[100]};
      span {
        color: ${({ theme }) => theme.light[300]};
      }
    }

    div.details {

      margin-top: 4.2rem;
      display: flex;
      align-items: center;
      gap: 4.8rem;
      width: 100%;

      @media (max-width: 850px) {
        flex-direction: column;
        img {
          width: 100%;
        }
      }

      img {
        max-width: 39.0rem;
        aspect-ratio: 1;
      }

      div {

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        border: 1px solid green;
        width: fit-content;
        overflow: hidden;

        h1, h2 {
          color: ${({ theme }) => theme.light[300]};
        }

        ul {
          list-style: none;
          display: flex;
          gap: 1.2rem;

          overflow-y: hidden;
          overflow-x: auto;

          li {
            color: ${({ theme }) => theme.light[100]};

            padding: 4px 8px;
            background-color: ${({ theme }) => theme.dark[1000]};
            border-radius: 8px;
          }
        }

        button {
          max-width: 13.1rem;
        }

        @media (max-width: 850px) {

          h1, h2 {
            text-align: center;
          }
        }
      }
    }
  }
`;