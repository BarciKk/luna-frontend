import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './routes/RoutesWrapper.routes';
import { CssBaseline } from '@mui/material';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ModalProvider } from 'providers';
import { DateProvider } from 'providers/DateProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <DateProvider>
          <ModalProvider>
            <HelmetProvider>
              <CssBaseline />
              <RoutesWrapper />
            </HelmetProvider>
          </ModalProvider>
        </DateProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  );
};

//To be honest whole mui theme must be rewritten and whole app should be checked
