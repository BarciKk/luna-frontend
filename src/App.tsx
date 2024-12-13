import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './routes/RoutesWrapper.routes';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  ModalProvider,
  ThemeProvider,
  DateProvider,
  ReactQueryProvider,
} from 'providers';

export const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};
