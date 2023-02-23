import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 4.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  
  h2 {
    color: ${({ theme }) => theme.light[300]}
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.dark[200]};
  border: 1px solid ${({ theme }) => theme.dark[200]};
  border-radius: 8px;
  padding-top: 1.6rem;

  margin-right: 1.6rem;
  height: 29.2rem;
  min-width: 21.0rem;
  width: 21.0rem;
  
  @media (min-width: 650px) {
    margin-right: 2.7rem;
    height: 46.2rem;
    min-width: 30.4rem;
    width: 30.4rem;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img.icon {
    align-self: flex-end;
    color: ${({ theme }) => theme.light[300]};
    margin-right: 1.8rem;
    height: 2.4rem;
    width: 2.4rem;
    z-index: 1;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.light[100]};
    }
  }

  div.details {

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    &.no-admin {
      transform: translateY(-2.0rem);
    }

    @media (max-width: 650px) {
      gap: 1.2rem;
    }

    img {
      height: 17.6rem;
      width: 17.6rem;

      @media (max-width: 650px) {
        height: 8.8rem;
        width: 8.8rem;
      }
    }
  
    h3 {

      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.light[300]};
      * {
        align-self: center;
        padding: 0;
        margin: 0;
      }

      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;

      @media (max-width: 650px) {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;  
      }
    }
  
    p {
      color: ${({ theme }) => theme.light[400]};
      padding: 0 8%;
      @media (max-width: 650px) {
        display: none;
      }
    }
  
    h4 {
      color: ${({ theme }) => theme.tints.cake[200]};

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 160%;

      @media (max-width: 650px) {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;   
      }
    }
  }

  div.order-wrapper {

    width: 100%;
    padding: 0 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 650px) {
      flex-direction: row;
      gap: 1.8rem;
    }

    * {
      padding: 0;
      margin: 0;
    }

    &.no-admin {
      transform: translateY(-2.0rem);
    }

    div.order-panel {
      
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.8rem;

      svg {
        align-self: center;
        color: ${({ theme }) => theme.light[100]};
        width: 1.8rem;
      }
  
      span {
        color: ${({ theme }) => theme.light[300]};
      }
    }

    button {

      @media (min-width: 650px) {
        width: 9.2rem;
      }

    }
  }
`;