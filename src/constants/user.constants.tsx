import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RepeatIcon from '@mui/icons-material/Repeat';
import CheckIcon from '@mui/icons-material/Check';

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

export const colorOptions = [
  { name: 'Red', color: '#f44336' },
  { name: 'Blue', color: '#1976d2' },
  { name: 'Green', color: '#4caf50' },
  { name: 'Orange', color: '#ff9800' },
  { name: 'Purple', color: '#ae21c4' },
];
