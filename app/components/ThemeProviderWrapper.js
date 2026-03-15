'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1b5e20' },
    secondary: { main: '#ff6f00' },
    background: { default: '#ffffff' },
    text: { primary: '#171717' },
  },
  typography: {
    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedSecondary: {
          backgroundColor: '#ff6f00',
          '&:hover': {
            backgroundColor: '#e65100',
          },
        },
        outlinedSecondary: {
          borderColor: '#ff6f00',
          color: '#ff6f00',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#1b5e20',
        },
        h3: {
          fontWeight: 700,
          color: '#1b5e20',
        },
      },
    },
  },
});

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <a href="#contact" className="floating-cta">
        Kostenlos anfragen
      </a>
    </ThemeProvider>
  );
}
