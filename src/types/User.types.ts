import { ReactNode } from 'react';

export type Category = {
  title: string;
  icon: ReactNode;
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
