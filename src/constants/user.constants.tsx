import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RepeatIcon from '@mui/icons-material/Repeat';
import CheckIcon from '@mui/icons-material/Check';
import { TaskPriority } from 'enums/Task.enums';

export const DEFAULT_USER_IMAGE = 'https://i.imgur.com/uhaRENv.png';
export const MAX_CUSTOM_CATEGORIES = 5;

export const taskOptions = [
  {
    icon: <EmojiEventsIcon fontSize="large" color="primary" />,
    title: 'Habit',
    description:
      'Activity that repeats over time. It has detailed tracking and statistics.',
  },
  {
    icon: <RepeatIcon fontSize="large" color="primary" />,
    title: 'Recurring Task',
    description:
      'Activity that repeats over time without tracking or statistics',
  },
  {
    icon: <CheckIcon fontSize="large" color="primary" />,
    title: 'Task',
    description: 'Single instance activity without tracking over time.',
  },
];

export const taskPriorityIcons: Record<TaskPriority, React.ReactNode> = {
  [TaskPriority.Highest]: '👹',
  [TaskPriority.High]: '🔥',
  [TaskPriority.Medium]: '⚡',
  [TaskPriority.Low]: '💡',
  [TaskPriority.Default]: '🔅',
};
//update this with actual icons XD
