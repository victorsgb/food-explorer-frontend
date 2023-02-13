// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

// Styling related imports
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

// Custom hooks
import { AuthProvider } from './hooks/auth';

// Custom routes
import { Routes } from './routes';

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
