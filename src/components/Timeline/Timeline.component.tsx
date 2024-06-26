import { FC, useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { Badge, Box, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Day } from './Day';
import { ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';

type TimelineProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export const Timeline: FC<TimelineProps> = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const amountOfDays = isSmallScreen ? 1 : 4;

  const days = [];

  for (let i = -amountOfDays; i <= amountOfDays; i++) {
    days.push(addDays(currentDate, i));
  }

  const handlePrevDay = () => {
    setCurrentDate(subDays(currentDate, 1));
  };

  const handleNextDay = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop="8px"
      sx={{
        marginX: '12px',
      }}
    >
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
        <Badge color="secondary" onClick={handlePrevDay}>
          <ArrowBackIosIcon />
        </Badge>
      </motion.div>
      <Box display="flex" justifyContent="center" alignItems="center" gap="8px">
        {days.map((day) => (
          <Day
            key={format(day, 'yyyy-MM-dd')}
            day={day}
            selectedDate={selectedDate}
            onDateChange={onDateChange}
          />
        ))}
      </Box>
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
        <Badge
          color="secondary"
          onClick={handleNextDay}
          sx={{ cursor: 'pointer' }}
        >
          <ArrowForwardIos />
        </Badge>
      </motion.div>
    </Box>
  );
};
