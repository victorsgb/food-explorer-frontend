import styled from 'styled-components';

export const Container = styled.div`

  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  img {
    width: clamp(1.2rem, 8vw, 4.2rem);
  }

  div {

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0;
    
    @media (max-width: 650px) {
      flex-direction: row;
      align-items: center;
      gap: 1.0rem;
    }

    h1 {
      white-space: nowrap;
      color: ${({ theme }) => theme.light[100]};
      @media (max-width: 650px) {
        font-size: 1.2rem;
      }
    }
    span {
      color: ${({ theme }) => theme.tints.cake[200]};
      line-height: 12px;
    }
  }
`;