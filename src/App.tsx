import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './Routes/RoutesWrapper.routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RoutesWrapper />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
