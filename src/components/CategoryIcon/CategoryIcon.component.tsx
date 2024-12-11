import { Box, IconButton, Tooltip } from '@mui/material';
import { FC, useEffect } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';
import { Category } from 'types/User.types';
import { Typography } from 'components/Typography';
import { useModal } from 'providers/ModalProvider';
import { useQueryString } from 'hooks';
import {
  BASE_CATEGORIES,
  CUSTOM_CATEGORIES,
} from 'constants/category.constants';

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

  const selectedIcon = isBaseCategory
    ? BASE_CATEGORIES.find((category) => category.name === name)?.icon
    : CUSTOM_CATEGORIES.find((category) => category.name === icon)?.icon;

  return (
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
      <Box
        sx={{
          width: 'fit-content',
          minWidth: '5em',
          textAlign: 'center',
        }}
        p={2}
      >
        <Box
          sx={{
            p: 1,
            bgcolor: color,
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
        >
          <Tooltip id={id} title={name} arrow>
            <IconButton onClick={handleSelectCategory}>
              {selectedIcon || <AutoAwesomeIcon />}
            </IconButton>
          </Tooltip>
        </Box>

        <Typography color="primary.contrastText" text={name} maxLength={8} />
      </Box>
    </motion.div>
  );
};
