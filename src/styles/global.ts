// Core dependencies
import { createGlobalStyle } from 'styled-components';

import { themeProps } from './theme';

export default createGlobalStyle<themeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {

    background-color: ${({ theme }) => theme.dark[400]};

    * {
      letter-spacing: 0%;
      text-decoration: none;
      padding: 0;

      .dm-sans-regular-400 {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }

      .poppins-medium-100 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;      
      }
      
      .poppins-medium-200 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 2.0rem;
        line-height: 160%;
      };

      .poppins-bold-300 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 140%;
      };

      .poppins-regular-300 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 140%;
      };

      .poppins-medium-400 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
      };
  
      .poppins-medium-500 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 4.0rem;
        line-height: 140%;
      };

      .roboto-smallest-regular {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 160%;      
      };

      .roboto-smaller-regular {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
      };

      .roboto-smaller-bold {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 160%;      
      };

      .roboto-small-spaced {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 160%;
      };

      .roboto-small-regular {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;      
      };

      .roboto-big-bold {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2.0rem;
        line-height: 160%;
      };

      .roboto-bigger-bold {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 'auto';      
      };

      .roboto-biggest-regular {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 160%;
      };

      .roboto-giant-bold {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 4.2rem;
        line-height: 'auto';
      };
    }
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.dark[1000]} none;
  }
  
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    cursor: pointer;
  }
  
  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.dark[200]};
    cursor: pointer;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.dark[1000]};
    border-radius: 5px;
    cursor: pointer;

    transition: all 400ms;

    &:hover {
      background-color: ${({ theme }) => theme.dark[900]};
    }
  }
`;