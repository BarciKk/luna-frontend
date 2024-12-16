import { FC, useState, useEffect } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Day } from '../Day';
import { ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { currentDate } from 'constants/date.constants';

export const Timeline: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dateParam = searchParams.get('date');
  const initialDate = dateParam ? new Date(dateParam) : currentDate;
  const [date, setDate] = useState(initialDate);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const amountOfDays = isSmallScreen ? 1 : 4;

  useEffect(() => {
    if (format(date, 'yyyy-MM-dd') !== dateParam) {
      setSearchParams({ date: format(date, 'yyyy-MM-dd') });
    }
  }, [date, dateParam, setSearchParams]);

  const days = [];

  for (let i = -amountOfDays; i <= amountOfDays; i++) {
    days.push(addDays(date, i));
  }

  const handlePrevDay = () => {
    setDate(subDays(date, 1));
  };

  const handleNextDay = () => {
    setDate(addDays(date, 1));
  };

  const handleDayClick = (date: Date) => {
    setDate(date);
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
        <IconButton color="info" onClick={handlePrevDay}>
          <ArrowBackIosIcon />
        </IconButton>
      </motion.div>
      <Box display="flex" justifyContent="center" alignItems="center" gap="8px">
        {days.map((day) => (
          <Day
            key={format(day, 'yyyy-MM-dd')}
            day={day}
            onClick={handleDayClick}
          />
        ))}
      </Box>
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
        <IconButton color="info" onClick={handleNextDay}>
          <ArrowForwardIos />
        </IconButton>
      </motion.div>
    </Box>
  );
};
