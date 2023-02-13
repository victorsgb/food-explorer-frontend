// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styling related imports
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

// Custom hooks
import { AuthProvider } from './hooks/auth';

// Custom routes
import { Routes } from './routes';

// Styling related imports
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
