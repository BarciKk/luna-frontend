import { createTheme, ThemeOptions } from '@mui/material';

export const themeSharedConfig: ThemeOptions = {
  shape: {
    borderRadius: 3,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'medium',
        margin: 'dense',
      },

      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #c9c7c7',
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          borderRadius: 8,
          transition: 'background-color 0.3s ease',
        },
        containedPrimary: {
          color: '#ffffff',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: '#4F4F4F',
        fontSize: 16,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 8,
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
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
};

export const lightTheme = createTheme({
  ...themeSharedConfig,
  palette: {
    mode: 'light',
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#ffffff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    success: {
      light: '#81c784',
      main: '#4BB543',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    info: {
      light: '#6e6e6e',
      main: '#4F4F4F',
      dark: '#2e2e2e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
});
export const darkTheme = createTheme({
  ...themeSharedConfig,
  palette: {
    mode: 'dark',
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#ffffff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    success: {
      light: '#81c784',
      main: '#4BB543',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    info: {
      light: '#d9d9d9',
      main: '#4F4F4F',
      dark: '#2e2e2e',
      contrastText: '#ffffff',
    },

    background: {
      default: '#6e6e6e',
      paper: '#d9d9d9',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
});
