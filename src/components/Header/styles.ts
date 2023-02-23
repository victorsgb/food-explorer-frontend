import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  background-color: ${({ theme }) => theme.dark[600]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding: 0 8%;

  overflow-y: hidden;
  overflow-x: auto;

  div.left-elements {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8.3rem;
    min-width: 0;

    width: 100%;

    img.menu, img.order {

      cursor: pointer;

      @media (min-width: 650px) {
        display: none;
      }

      &.admin {
        display: none;
      }
    }

    div.logo {
      * {
        font-size: 2.4rem;
        line-height: 'auto';
      }
    }

    div#name {
      @media (max-width: 650px) {
        display: none;
      }
    }

    @media (min-width: 650px) {
      min-width: 60.0rem;
      gap: 4.3rem;
    }

  }

  div.right-elements {
    min-width: 20.0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    @media (max-width: 650px) {
      display: none;
    }
    
    button {
      max-width: 21.6rem;
    }
  
    img {
      width: fit-content;
      cursor: pointer;
    }
  }

  @media (max-width: 650px) {
    justify-content: center;
  }

`;