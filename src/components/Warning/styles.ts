import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  position: absolute;
  min-width: 15.0rem;
  width: fit-content;
  margin: 0 auto;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);

  > div {
    animation: show-up-and-fade 10s forwards;

    opacity: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.light[100]};
    border-radius: 5px;

    &.api-bad-response {
      color: ${({ theme }) => theme.tints.tomato[100]};

      div.duration-line {
        background-color: ${({ theme }) => theme.tints.tomato[100]};
      }
    }

    h2 {
      width: 100%;
    }

    ul, h2 {
      padding: 3%;

      list-style: none;
      li {
        font-size: 1.4rem;
        /* padding: 3%; */

        &.satisfied {
          color: green;
        }
      }

      transition: all 400ms;
    }

    div.duration-line {
      animation: progress-left 10s forwards;

      height: 5px;
      width: 100%;
      margin-top: 5%;
    }
  }

  transition: all 400ms;

  @keyframes show-up-and-fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }

    10% {
      opacity: 1;
      transform: translateY(0px);
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes progress-left {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
`;