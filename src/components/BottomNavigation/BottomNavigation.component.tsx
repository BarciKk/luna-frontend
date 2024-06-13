import {
  BottomNavigationAction,
  BottomNavigation as MaterialNavigation,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const BottomNavigation = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <MaterialNavigation
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#2b2b2b',
      }}
    >
      <BottomNavigationAction
        label="Today"
        sx={{ color: 'white' }}
        component={Link}
        to="/today"
        icon={<CalendarMonthIcon />}
      />
      <BottomNavigationAction
        label="Habits"
        icon={<WorkspacePremiumIcon />}
        component={Link}
        to="/habits"
        sx={{ color: 'white' }}
      />
      <BottomNavigationAction
        label="Tasks"
        component={Link}
        to="/tasks"
        icon={<TaskAltIcon />}
        sx={{ color: 'white' }}
      />
      <BottomNavigationAction
        label="Categories"
        component={Link}
        sx={{ color: 'white' }}
        to="/categories"
        icon={<CategoryIcon />}
      />
    </MaterialNavigation>
  );
};
