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

export const darkTheme = createTheme({
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
    mode: 'dark',
    background: {
      default: '#6c7683',
    },
    primary: {
      main: '#1565c0',
      contrastText: '#fff',
    },
    error: {
      main: '#ef5350',
    },
    success: {
      main: '#66bb6a',
    },
    info: {
      main: '#bbdefb',
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
          color: 'white',
          transition: 'background-color 0.3s ease',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontSize: 16,
        color: 'white',
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
          color: '#90caf9',
        },
      },
    },
  },
});
