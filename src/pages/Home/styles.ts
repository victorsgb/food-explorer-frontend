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
    margin: 16.4rem 6.4rem 4.6rem;

    @media (max-width: 650px) {
      margin: 2.0rem 3% 4.6rem;
    }
    
    div.banner {
      max-height: 26.0rem;
      border-radius: 8px;
      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  
      display: flex;
      justify-content: center;
  
      img {
        width: 50vw;
        align-self: flex-end;
      }
  
      div.text {
        align-self: center;
        color: ${({ theme }) => theme.light[300]}
      }
  
      @media (max-width: 650px) {
        margin: 10% 1% 1.3rem;
      }
    }
  }
`;