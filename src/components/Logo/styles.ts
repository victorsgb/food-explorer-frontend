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

  h1 {
    white-space: nowrap;
    color: ${({ theme }) => theme.light[100]};
    font-size: clamp(1.2rem, 5vw, 4.2rem);
  }
`;