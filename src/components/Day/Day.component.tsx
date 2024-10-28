import { Box, Typography, useTheme } from '@mui/material';
import { currentDate } from 'constants/date.constants';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useQueryString } from 'hooks';
import { FC } from 'react';

type DayProps = {
  day: Date;
  onClick: (date: Date) => void;
};

export const Day: FC<DayProps> = ({ day, onClick }) => {
  const theme = useTheme();
  const { createQueryString } = useQueryString();
  const dayFormatted = format(day, 'yyyy-MM-dd');
  const dayName = format(day, 'eee');
  const dayNumber = format(day, 'dd');

  const handleClick = () => {
    onClick(day);
    createQueryString('date', dayFormatted);
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Box
        textAlign="center"
        minWidth="4em"
        style={{
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <Box
          padding="12px"
          borderRadius="12px"
          bgcolor="rgba(43, 43, 43, .9)"
          sx={{
            color:
              dayNumber === format(currentDate, 'dd')
                ? theme.palette.primary.light
                : 'white',
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
