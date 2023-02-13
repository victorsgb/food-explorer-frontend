// Core dependencies
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    * {
      background-color: 'red';
      letter-spacing: 0%;
      text-decoration: none;
      padding: 0;

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
`;