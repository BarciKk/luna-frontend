import { Category } from './Category.types';
import { Task } from './Task.types';

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
  tasks: Task[];
};
