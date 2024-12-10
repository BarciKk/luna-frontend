import { BrowserRouter } from 'react-router-dom';
import { RoutesWrapper } from './routes/RoutesWrapper.routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ModalProvider } from 'providers';
import { DateProvider } from 'providers/DateProvider';
import { lightTheme } from 'theme';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
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
