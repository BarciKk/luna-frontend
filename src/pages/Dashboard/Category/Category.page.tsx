import { Box, Divider, Stack, Typography } from '@mui/material';
import { useModal, useUser } from 'hooks';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import { Button } from 'components/Button';

import { BASE_CATEGORIES } from 'constants/category.constants';
import { CategoryIcon } from 'components/CategoryIcon/CategoryIcon.component';

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
            flexDirection="row"
            maxHeight="250px"
            overflow="auto"
          >
            {BASE_CATEGORIES.map((category, index) => (
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
