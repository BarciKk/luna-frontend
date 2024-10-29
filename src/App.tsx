import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './routes/RoutesWrapper.routes';
import { CssBaseline } from '@mui/material';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import CustomFormProvider from 'providers/FormProvider';
import { ModalProvider } from 'providers';

export const App = () => {
  return (
    <ReactQueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <CustomFormProvider>
        <ModalProvider>
          <BrowserRouter>
            <HelmetProvider>
              <CssBaseline />
              <RoutesWrapper />
            </HelmetProvider>
          </BrowserRouter>
        </ModalProvider>
      </CustomFormProvider>
    </ReactQueryProvider>
  );
};
