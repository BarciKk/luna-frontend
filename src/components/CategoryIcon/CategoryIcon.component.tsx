import { Box, IconButton, Tooltip } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { FC, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Category } from 'types/User.types';
import { Typography } from 'components/Typography';
import { useModal } from 'providers/ModalProvider';
import { useQueryString } from 'hooks';
import { BASE_CATEGORIES } from 'constants/category.constants';

export const CategoryIcon: FC<Category> = ({ id, name, icon, color }) => {
  const { handleOpenModal, open } = useModal();
  const { createQueryString, removeQueryString } = useQueryString();

  const isBaseCategory = BASE_CATEGORIES.some(
    (baseCategory) => baseCategory.name === name,
  );

  const handleSelectCategory = () => {
    if (!isBaseCategory) {
      handleOpenModal('createCategory');
    }
    if (!open && !isBaseCategory) {
      createQueryString('id', `${id}`);
    }
  };
  useEffect(() => {
    if (!open) {
      removeQueryString('id');
    }
  }, [open, removeQueryString]);

  return (
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
          <Tooltip id={id} title={name} arrow>
            <IconButton onClick={handleSelectCategory}>
              {icon === 'AutoAwesomeIcon' ? <AutoAwesomeIcon /> : icon}
            </IconButton>
          </Tooltip>
        </Box>

        <Typography text={name} maxLength={5} />
      </Box>
    </motion.div>
  );
};
