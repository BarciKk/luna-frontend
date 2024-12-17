import { TaskPriority, TaskStatus } from 'enums/Task.enums';

export const priorityColors: Record<TaskPriority, string> = {
  5: 'error.main',
  4: 'warning.main',
  3: 'info.main',
  2: 'success.main',
  1: 'grey.500',
};

export const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.PENDING]: 'warning.main',
  [TaskStatus.IN_PROGRESS]: 'info.main',
  [TaskStatus.COMPLETED]: 'success.main',
  [TaskStatus.CANCELED]: 'grey.500',
};
