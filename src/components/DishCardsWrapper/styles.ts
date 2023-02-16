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

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  svg {
    align-self: flex-end;
    color: ${({ theme }) => theme.light[300]};
    margin-bottom: 2.6rem;
    margin-right: 1.8rem;

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

    img {
      height: 17.6rem;
      width: 17.6rem;
      margin-bottom: 1.5rem;
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
    }
  
    p {
      color: ${({ theme }) => theme.light[400]};
    }
  
    h4 {
      color: ${({ theme }) => theme.tints.cake[200]}
    }
  }
`;