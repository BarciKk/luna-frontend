import { PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider as TanstackProvider,
} from 'react-query';

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return <TanstackProvider client={queryClient}>{children}</TanstackProvider>;
};
