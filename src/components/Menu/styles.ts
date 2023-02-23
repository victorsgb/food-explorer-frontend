import styled from 'styled-components';

export const Container = styled.dialog`

  background-color: red;
  height: 100%;
  width: 100vw;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.dark[400]};

  header {
    height: 10.4rem;
    background-color: ${({ theme }) => theme.dark[600]};

    display: flex;
    align-items: flex-end;
    padding-left: 2.8rem;
    padding-bottom: 1.4rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      img {
        cursor: pointer;
        width: 1.8rem;
      }
  
      span {
        color: ${({ theme }) => theme.light[100]};
        font-size: 2.3rem;
        line-height: 2.3rem;
      }
    }
  }

  div.content {
    width: 100%;  
    
    main {
      height: 100%;
      width: 100%;
     
      padding: 8% 6%;
  
      display: flex;
      flex-direction: column;
      gap: 4.6rem;
  
      ul {
        list-style: none;
       
        li {
          color: ${({ theme }) => theme.light[300]};
          padding: 8px;
          border-bottom: 2px solid ${({ theme }) => theme.dark[900]};
          cursor: pointer;
  
          &:hover {
            border-bottom: 2px solid ${({ theme }) => theme.light[700]};
          }
        }
      }
    }
  }
  div.empty-space {
    height: 100%;
  }
`;