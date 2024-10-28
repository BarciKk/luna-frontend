import { Category, TaskPriority } from 'enums/TaskPriority.enums';

export type Task = {
  id: string;
  creatorId: string;
  title: string;
  category: Category;
  description?: string;
  completed?: boolean;
  created: Date;
  priority: TaskPriority;
  pendingTask: boolean;
};
