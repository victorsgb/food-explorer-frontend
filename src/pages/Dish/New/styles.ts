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
    width: 90vw;
    max-width: 112.0rem;
    margin: 4.0rem auto 0;

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

    h1 {
      color: ${({ theme }) => theme.light[300]};
    }

    form {
      display: grid;
      grid-template-columns: 1fr 1fr 7.0rem 1fr;
      grid-template-areas:
        'file name select select'
        'ingredients ingredients ingredients money'
        'multiline multiline multiline multiline'
        'buttons buttons buttons buttons';
      gap: 3.2rem;

      div#file {
        grid-area: file;
      }
      div#name {
        grid-area: name;
      }
      div#select {
        grid-area: select;
      }
      div#ingredients {
        grid-area: ingredients;
        background-color: green;
      }
      div#money {
        grid-area: money;
      }
      div#multiline {
        grid-area: multiline;
      }
      div.buttons-wrapper {
        grid-area: buttons;
        background-color: green;
        height: 10.0rem;
      }
    }
  }
`;