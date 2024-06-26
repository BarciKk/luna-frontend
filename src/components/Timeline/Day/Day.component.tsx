import { Box, Typography, useTheme } from '@mui/material';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { FC } from 'react';

type DayProps = {
  day: Date;
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export const Day: FC<DayProps> = ({ day, selectedDate, onDateChange }) => {
  const dayFormatted = format(day, 'yyyy-MM-dd');
  const dayName = format(day, 'eee');
  const dayNumber = format(day, 'dd');
  const theme = useTheme();
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Box
        textAlign="center"
        minWidth="4em"
        width="100%"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => onDateChange(dayFormatted)}
      >
        <Box
          padding="12px"
          borderRadius="12px"
          sx={{
            background:
              dayFormatted === selectedDate
                ? `${theme.palette.primary.dark}`
                : 'rgba(43, 43, 43, .95)',
          }}
        >
          <Typography>{dayName}</Typography>
          <Typography fontWeight="bolder" fontSize={18}>
            {dayNumber}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
