import { PropsWithChildren, ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'providers/ThemeProvider';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialRoute?: string;
}

export function renderWithProviders(
  ui: ReactElement,
  { ...renderOptions }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({
    children,
  }: PropsWithChildren<Record<string, unknown>>) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    userEvent: userEvent.setup(),
  };
}

export * from '@testing-library/react';
export { renderWithProviders as render };
