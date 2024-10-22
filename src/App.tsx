import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './routes/RoutesWrapper.routes';
import { CssBaseline } from '@mui/material';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import CustomFormProvider from 'providers/FormProvider';

export const App = () => {
  return (
    <ReactQueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <CustomFormProvider>
          <HelmetProvider>
            <CssBaseline />
            <RoutesWrapper />
          </HelmetProvider>
        </CustomFormProvider>
      </BrowserRouter>
    </ReactQueryProvider>
  );
};
