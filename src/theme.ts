import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  shape: {
    borderRadius: 8,
  },
  spacing: [0, 4, 8, 16, 32, 64],
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      dark: '#2276d2',
    },
    error: {
      main: '#ff3333',
    },
    success: {
      main: '#4BB543',
    },
    info: {
      main: '#4F4F4F',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'medium',
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'background-color 0.3s ease',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: 'info.main',
        fontSize: 16,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
      },
      styleOverrides: {
        root: {
          fontSize: 'small',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          color: '#1976d2',
        },
      },
    },
  },
});
