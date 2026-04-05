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
      <a
        href="https://wa.me/49176475615"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta"
        aria-label="Kostenlos anfragen via WhatsApp"
      >
        {/* WhatsApp official logo SVG */}
        <span className="floating-cta-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38" height="38" aria-hidden="true">
            <circle cx="24" cy="24" r="24" fill="#25D366"/>
            <path fill="#fff" d="M24 10.4C16.5 10.4 10.4 16.5 10.4 24c0 2.4.65 4.7 1.78 6.68L10.4 37.6l7.13-1.75A13.53 13.53 0 0 0 24 37.6c7.5 0 13.6-6.1 13.6-13.6S31.5 10.4 24 10.4zm6.74 18.5c-.28.78-1.63 1.5-2.23 1.56-.6.06-1.16.27-3.92-.82-3.3-1.3-5.4-4.7-5.56-4.91-.16-.22-1.3-1.73-1.3-3.3s.83-2.34 1.12-2.66c.3-.32.65-.4.87-.4l.62.01c.2 0 .47-.08.73.56.27.65.9 2.2.98 2.36.08.17.13.36.03.58-.1.22-.16.36-.3.55-.16.2-.33.44-.47.59-.16.17-.32.35-.14.68.18.33.82 1.35 1.76 2.18 1.2 1.08 2.23 1.41 2.55 1.57.33.16.52.14.71-.08l1.01-1.2c.2-.26.4-.2.67-.12.27.08 1.73.82 2.03.97.3.14.5.22.57.34.08.12.08.7-.2 1.48z"/>
          </svg>
        </span>
        <span className="floating-cta-text">
          <span className="floating-cta-title">WhatsApp</span>
          <span className="floating-cta-sub">Kostenlos anfragen</span>
        </span>
      </a>
    </ThemeProvider>
  );
}
