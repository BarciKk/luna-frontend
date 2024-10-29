import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import { FC } from 'react';

import { motion } from 'framer-motion';
import { Category } from 'types/User.types';

export const CategoryIcon: FC<Category> = ({ title, icon, color }) => (
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
      <Typography
        mt="2px"
        fontWeight="bolder"
        textAlign="center"
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </Typography>
    </Box>
  </motion.div>
);
