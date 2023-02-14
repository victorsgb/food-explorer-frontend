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
  
  div.left-elements, div.right-elements {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.left-elements {
    min-width: 60.0rem;
    gap: 4.3rem;

    div.logo {
      * {
        font-size: 2.4rem;
        line-height: 'auto';
      }
    }
  }

  div.right-elements {
    min-width: 20.0rem;
    gap: 3.2rem;
    
    button {
      max-width: 21.6rem;
    }
  
    svg {
      width: fit-content;
      cursor: pointer;
    }
  }
`;