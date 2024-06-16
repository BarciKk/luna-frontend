import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './routes/RoutesWrapper.routes';
import { CssBaseline } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { ThemeProvider } from './providers/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';

export const App = () => {
  const queryClient = new QueryClient();
  const methods = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <FormProvider {...methods}>
            <HelmetProvider>
              <CssBaseline />
              <RoutesWrapper />
            </HelmetProvider>
          </FormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
