import { Box, IconButton, Tooltip } from '@mui/material';
import { FC, useEffect, useMemo } from 'react';
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

type CustomCategoryIconProps = Category & {
  withoutLabel?: boolean;
};

export const CategoryIcon: FC<CustomCategoryIconProps> = ({
  id,
  name,
  icon,
  color,
  withoutLabel = false,
}) => {
  const { handleOpenModal, open } = useModal();
  const { createQueryString, removeQueryString } = useQueryString();

  const isBase = BASE_CATEGORIES.some((category) => category.name === name);

  const matchedCategory = isBase
    ? BASE_CATEGORIES.find((category) => category.name === name)
    : CUSTOM_CATEGORIES.find((category) => category.name === icon);

  const categoryData = useMemo(() => {
    return {
      isBase,
      selectedIcon: matchedCategory?.icon || <AutoAwesomeIcon />,
    };
  }, [name, icon]);

  const handleSelectCategory = () => {
    if (!categoryData.isBase && !withoutLabel) {
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
            <IconButton onClick={handleSelectCategory}>
              {categoryData.selectedIcon}
            </IconButton>
          </Tooltip>
        </Box>

        {!withoutLabel && (
          <Typography color="primary.contrastText" text={name} maxLength={8} />
        )}
      </Box>
    </motion.div>
  );
};
