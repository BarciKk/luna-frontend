import { TaskStatus, TaskPriority } from 'enums/Task.enums';

export type Task = {
  id: string;
  name: string;
  date: Date | string;
  iconName: string;
  createdAt: Date;
  priority: TaskPriority;
  description?: string;
  status: TaskStatus;
  recurringTask: boolean;
  userId?: string;
};

export type CreateTaskType = Pick<
  Task,
  | 'name'
  | 'date'
  | 'priority'
  | 'description'
  | 'userId'
  | 'iconName'
  | 'recurringTask'
>;
export type TaskProps = Pick<
  Task,
  | 'id'
  | 'name'
  | 'date'
  | 'iconName'
  | 'priority'
  | 'description'
  | 'status'
  | 'recurringTask'
>;
