import { TaskPriority } from 'enums/TaskPriority.enums';

type Category = {
  name: string;
  icon: string;
  color: string;
};

export type Task = {
  id: string;
  creatorId: string;
  title: string;
  category: Category[];
  description?: string;
  completed?: boolean;
  created: Date;
  priority: TaskPriority;
  pendingTask: boolean;
};
