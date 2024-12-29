import { Box, IconButton, Tooltip } from '@mui/material';
import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typography } from 'components/Typography';
import { useModal } from 'providers/ModalProvider';
import { useQueryString } from 'hooks';
import { Category } from 'types/Category.types';

type CustomCategoryIconProps = Category & {
  withoutLabel?: boolean;
};

export const CategoryIcon: FC<CustomCategoryIconProps> = ({
  id,
  name,
  icon,
  color,
  withoutLabel = false,
  isBase,
}) => {
  const { handleOpenModal, open } = useModal();
  const { createQueryString, removeQueryString } = useQueryString();
  const handleSelectCategory = () => {
    if (!withoutLabel && !isBase) {
      handleOpenModal('createCategory');
      if (!open) createQueryString('id', `${id}`);
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
          minWidth: '5em',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            p: 1,
            bgcolor: color,
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
        >
          <Tooltip title={withoutLabel ? '' : name} arrow>
            <IconButton onClick={handleSelectCategory}>{icon}</IconButton>
          </Tooltip>
        </Box>

        {!withoutLabel && (
          <Typography color="primary.contrastText" text={name} maxLength={8} />
        )}
      </Box>
    </motion.div>
  );
};
