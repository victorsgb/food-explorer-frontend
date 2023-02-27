import styled from 'styled-components';

export const Container = styled.nav`

  display: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(-100%, 0);
  overflow-x: hidden;

  font-size: 1.6rem;

  border: none;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.dark[400]};
  z-index: 2;

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