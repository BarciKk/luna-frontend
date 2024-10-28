import {
  Box,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useModal, useUser } from 'hooks';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import { Button } from 'components/Button';
import BlockIcon from '@mui/icons-material/Block';
import { FC, ReactNode } from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import { motion } from 'framer-motion';

interface Category {
  title: string;
  icon: ReactNode;
  color: string;
}

const categories: Category[] = [
  { title: 'Quit Smoking', icon: <BlockIcon />, color: 'lightblue' },
  { title: 'Quit Drinking', icon: <SmokeFreeIcon />, color: 'lightcoral' },
  { title: 'Healthy Eating', icon: <SmokeFreeIcon />, color: 'lightgreen' },
  { title: 'Stay Fit', icon: <SmokeFreeIcon />, color: 'lightyellow' },
  { title: 'Mental Health', icon: <SmokeFreeIcon />, color: 'lightpink' },
  { title: 'Relations', icon: <Diversity1Icon />, color: 'lightsalmon' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
  { title: 'Stress', icon: <SmokeFreeIcon />, color: 'lavender' },
];

const CategoryIcon: FC<Category> = ({ title, icon, color }) => (
  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
    <Box
      sx={{
        width: 'fit-content',
        maxWidth: '6em',
        minWidth: '6em',
        textAlign: 'center',
      }}
      p={2}
    >
      <Box
        sx={{
          p: 1,
          bgcolor: color,
          borderRadius: '8px',
        }}
      >
        <Tooltip title={title} arrow>
          <IconButton>{icon}</IconButton>
        </Tooltip>
      </Box>
      <Typography mt="2px" fontWeight="bolder" textAlign="center">
        {title}
      </Typography>
    </Box>
  </motion.div>
);
export const Category = () => {
  const { user } = useUser();
  const { handleOpenModal } = useModal();
  if (!user) return;
  return (
    <Stack marginTop="2em" justifyContent="center" alignItems="center">
      <Box
        width="50%"
        minWidth="360px"
        sx={{ bgcolor: 'rgba(43, 43, 43, .65)' }}
        color="white"
        borderRadius="12px"
        p={2}
      >
        <Box>
          <Typography fontWeight="bolder" fontSize="18px">
            Categories
          </Typography>
          <Divider sx={{ marginY: '10px' }} />
          <Typography fontWeight="bolder" fontSize="14px">
            Custom categories
          </Typography>
          <Stack
            alignItems="center"
            gap={1}
            marginY="60px"
            sx={{ opacity: 0.7 }}
          >
            <EventBusyOutlinedIcon sx={{ fontSize: '40px' }} />
            <Typography textAlign="center">
              There are no custom categories
            </Typography>
          </Stack>
          <Divider sx={{ marginY: '12px' }} />
          <Box>
            <Typography fontWeight="bolder" fontSize="14px">
              Default categories
            </Typography>
          </Box>
          <Stack
            marginTop={1}
            gap="4px"
            flexWrap="wrap"
            justifyContent="space-around"
            flexDirection="row"
            maxHeight="250px"
            overflow="auto"
          >
            {categories.map((category, index) => (
              <CategoryIcon
                key={index}
                title={category.title}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </Stack>
        </Box>
        <Button
          text="NEW CATEGORY"
          fullWidth
          onClick={() => handleOpenModal('createCategory')}
        />
      </Box>
    </Stack>
  );
};
