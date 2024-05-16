import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './Routes/RoutesWrapper.routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { FormProvider, useForm } from 'react-hook-form';

export const App = () => {
  const queryClient = new QueryClient();
  const methods = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <FormProvider {...methods}>
            <CssBaseline />
            <RoutesWrapper />
          </FormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
