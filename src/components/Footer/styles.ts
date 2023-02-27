import styled from 'styled-components';

export const Container = styled.div`
  height: 7.7rem;

  background-color: ${({ theme }) => theme.dark[600]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;

  overflow-x: auto;
  
  div.logo {
    * {
      color: ${({ theme }) => theme.light[700]};
      filter: grayscale(1);
    }  
  }

  p {
    color: ${({ theme }) => theme.light[200]};
    white-space: nowrap;
    margin-left: 8px;
  }
`;