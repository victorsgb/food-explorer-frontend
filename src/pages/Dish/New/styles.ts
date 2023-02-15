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
      margin-bottom: 3.2rem;
    }

    form {
      display: grid;
      grid-template-columns: 1fr 1fr 7.0rem 1fr;
      grid-template-areas:
        'file name select select'
        'ingredients ingredients ingredients money'
        'description description description description'
        'buttons buttons buttons buttons';
      gap: 3.2rem;

      div#file {
        grid-area: file;
      }
      div#name {
        grid-area: name;
      }
      div.select {
        grid-area: select;
      }
      div#ingredients {
        grid-area: ingredients;
        background-color: green;
      }
      div#money {
        grid-area: money;
      }
      div.textarea {
        grid-area: description;
      }
      div.buttons-wrapper {
        grid-area: buttons;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        margin: 0;
        padding: 0;

        button {
          max-width: 17.2rem;

          span {
            white-space: nowrap;
          }
        }
      }
    }
  }
`;