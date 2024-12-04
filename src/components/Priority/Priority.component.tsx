import { Flag } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC } from 'react';

interface CustomPriorityProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Priority: FC<CustomPriorityProps> = ({
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Box
      my={1}
      p={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="6px"
      sx={{
        cursor: 'pointer',
        border: '1px solid #c9c7c7',
        ':hover': { border: '1px solid black' },
      }}
    >
      <Box display="flex" alignItems="center">
        <IconButton>
          <Flag />
        </IconButton>
        <Typography>Priority</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={onDecrement} disabled={value === 1}>
          <RemoveIcon />
        </IconButton>
        <Typography sx={{ mx: 2, fontWeight: 'bolder', fontSize: '18px' }}>
          {value}
        </Typography>
        <IconButton onClick={onIncrement} disabled={value === 5}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
