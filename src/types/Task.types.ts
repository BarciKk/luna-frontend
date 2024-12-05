import { TaskStatus, TaskPriority } from 'enums/Task.enums';

export type Task = {
  id: string;
  name: string;
  date: Date | string;
  icon: string;
  createdAt: Date;
  priority: TaskPriority;
  description?: string;
  status: TaskStatus;
  reccurringTask: boolean;
  userId: string;
};

export type CreateTaskType = Pick<
  Task,
  'name' | 'date' | 'priority' | 'description' | 'userId' | 'icon'
>;
