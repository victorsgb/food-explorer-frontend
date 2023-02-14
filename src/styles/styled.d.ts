// Core dependencies
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    },
    dark: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    },
    tints: {
      tomato: {
        100: string;
        200: string;
        300: string;
        400: string;
      },
      carrot: {
        100: string;
      },
      mint: {
        100: string;
      },
      cake: {
        100: string;
        200: string;
      }
    }
  }
}