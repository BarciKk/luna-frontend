import { ReactNode } from 'react';

export type Category = {
  id: string;
  name: string;
  icon: ReactNode;
  userId?: string;
  color: string;
};

export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
  isActive: boolean;
  bio: string;
  createdAt: Date;
  categories: Category[];
};
