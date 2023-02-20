import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 4.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  h2 {
    color: ${({ theme }) => theme.light[300]}
  }

  div.cards-wrapper {
  }
`;

export const Content = styled.div`
  height: 46.2rem;
  width: 30.4rem;
  background-color: ${({ theme }) => theme.dark[200]};
  border: 1px solid ${({ theme }) => theme.dark[200]};
  border-radius: 8px;
  padding-top: 1.6rem;
  
  @media (max-width: 650px) {
    height: 29.2rem;
    width: 21.0rem;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    * {
      padding: 0;
      margin: 0;
    }

    svg {
      align-self: center;
      color: ${({ theme }) => theme.light[100]};
      width: 1.8rem;
    }

    span {
      color: ${({ theme }) => theme.light[300]};
    }

    button {
      width: 9.2rem;
    }
  }
`;