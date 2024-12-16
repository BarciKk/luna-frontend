import { Box } from '@mui/material';
import { Typography } from 'components/Typography';
import { currentDayNumber } from 'constants/date.constants';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useQueryString } from 'hooks';
import { FC } from 'react';

type DayProps = {
  day: Date;
  onClick: (date: Date) => void;
};

export const Day: FC<DayProps> = ({ day, onClick }) => {
  const { createQueryString } = useQueryString();
  const dayFormatted = format(day, 'yyyy-MM-dd');
  const dayName = format(day, 'eee');
  const dayNumber = format(day, 'dd');

  const handleDateChange = () => {
    onClick(day);
    createQueryString('date', dayFormatted);
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Box
        display="flex"
        flexDirection="column"
        style={{
          cursor: 'pointer',
        }}
        minWidth="4em"
        textAlign="center"
        onClick={handleDateChange}
        borderRadius="12px"
        bgcolor={
          currentDayNumber === dayNumber
            ? 'primary.main'
            : 'rgba(43, 43, 43, .85)'
        }
      >
        <Typography color="primary.contrastText" text={dayName} mt={1} />
        <Box
          bgcolor="rgba(43, 43, 43, .2)"
          borderRadius="16px"
          padding="8px"
          position="relative"
          top="1px"
        >
          <Typography
            color="primary.contrastText"
            fontWeight="bolder"
            fontSize={18}
            text={dayNumber}
          />
        </Box>
      </Box>
    </motion.div>
  );
};
