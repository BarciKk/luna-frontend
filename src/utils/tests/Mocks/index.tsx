import { ReactElement } from 'react';
import { render } from 'tests';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const renderWithProviders = (ui: ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
      </MemoryRouter>
    </QueryClientProvider>,
  );
};

export { renderWithProviders as render };
