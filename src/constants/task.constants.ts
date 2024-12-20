import { TaskStatus } from 'enums/Task.enums';

export const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.PENDING]: 'warning.main',
  [TaskStatus.IN_PROGRESS]: 'info.main',
  [TaskStatus.COMPLETED]: 'success.main',
  [TaskStatus.CANCELED]: 'grey.500',
};
export const priorityIcons = {
  1: '😎',
  2: '😊',
  3: '😐',
  4: '⚠️',
  5: '🔥',
};
