import { TaskPriority } from 'enums/TaskPriority.enums';

export type Task = {
  id: string;
  creatorId: string;
  title: string;
  description?: string;
  completed?: boolean;
  created: Date; //should be the same as selected date
  priority: TaskPriority;
  recurring?: boolean;
};
