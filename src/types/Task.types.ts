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

//task should have categoryId .. i have no clue what the author was thinking

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
