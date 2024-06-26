import {
  BottomNavigationAction,
  BottomNavigation as MaterialNavigation,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion } from 'framer-motion';

export const BottomNavigation = () => {
  const location = useLocation();
  const theme = useTheme();

  const getColor = (path: string) =>
    location.pathname === path ? theme.palette.primary.main : 'white';

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <MaterialNavigation
        showLabels
        sx={{
          width: '100%',
          position: 'sticky',
          backgroundColor: 'rgba(43, 43, 43, .95)',
        }}
      >
        <BottomNavigationAction
          label="Today"
          sx={{ color: getColor('/today') }}
          component={Link}
          to="/today"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          label="Habits"
          sx={{ color: getColor('/habits') }}
          component={Link}
          to="/habits"
          icon={<WorkspacePremiumIcon />}
        />
        <BottomNavigationAction
          label="Tasks"
          sx={{ color: getColor('/tasks') }}
          component={Link}
          to="/tasks"
          icon={<TaskAltIcon />}
        />
        <BottomNavigationAction
          label="Categories"
          sx={{ color: getColor('/categories') }}
          component={Link}
          to="/categories"
          icon={<CategoryIcon />}
        />
      </MaterialNavigation>
    </motion.div>
  );
};
