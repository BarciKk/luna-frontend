import { Flag } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC } from 'react';
import { Typography } from 'components/Typography';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
        backgroundColor: 'primary.contrastText',
        ':hover': { border: '1px solid #c9c7c7' },
      }}
    >
      <Box display="flex" alignItems="center" color="red">
        <IconButton color="primary">
          <Flag />
        </IconButton>
        <Typography text={t('dashboard.priority')} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={onDecrement} disabled={value === 1} color="info">
          <RemoveIcon />
        </IconButton>
        <Typography
          fontSize="18px"
          marginX={2}
          fontWeight="bold"
          color="text.primary"
          text={String(value)}
        />
        <IconButton onClick={onIncrement} disabled={value === 5} color="info">
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
