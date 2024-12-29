import { ReactNode } from 'react';

export type Category = {
  id?: string;
  name: string;
  icon: ReactNode | string;
  userId?: string;
  isBase: boolean;
  color: string;
};
