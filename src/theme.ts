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
      main: '#007bff',
    },
    error: {
      main: '#ff3333',
    },
    success: {
      main: '#4BB543',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 18px',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontSize: 14,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
        },
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
          color: '#46679E',
        },
      },
    },
  },
});
