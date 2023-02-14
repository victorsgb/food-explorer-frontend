import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > div.loading-spinner {
    width: 20px;
    height: 20px;
    border: 3px solid ${({ theme }) => theme.tints.tomato[400]};
    border-top: 3px solid ${({ theme }) => theme.tints.tomato[100]};
    border-radius: 50%;
    animation: spinner 0.5s linear infinite;
  }

`;