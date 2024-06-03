import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './Routes/RoutesWrapper.routes';
import { CssBaseline } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { ThemeProvider } from './providers/ThemeProvider';

export const App = () => {
  const queryClient = new QueryClient();
  const methods = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <FormProvider {...methods}>
            <CssBaseline />
            <RoutesWrapper />
          </FormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
