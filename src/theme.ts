import { createTheme } from '@mui/material';

export const theme = createTheme({
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
    primary: {
      main: '#1976d2',
    },
    error: {
      main: '#ff3333',
    },
    success: {
      main: '#4BB543',
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
          backgroundColor: '#1976d2',
          ':hover': {
            backgroundColor: '#115293',
          },
          padding: '10px 0px',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
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
