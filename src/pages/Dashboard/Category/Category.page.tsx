import { Box, Divider, Skeleton, Stack } from '@mui/material';
import { useSnackbar, useUser } from 'hooks';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import { Button } from 'components/Button';

import { BASE_CATEGORIES } from 'constants/category.constants';
import { CategoryIcon } from 'components/CategoryIcon/CategoryIcon.component';
import { MAX_CUSTOM_CATEGORIES } from 'constants/user.constants';
import { useModal } from 'providers/ModalProvider';
import { useQuery } from 'react-query';
import { getAllCategories } from 'api/category';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { CustomSnackbar } from 'components/Snackbar';
import { Typography } from 'components/Typography';

export const Category = () => {
  const { user } = useUser();
  const { handleOpenModal } = useModal();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const {
    data: categoryData,
    isLoading,
    error,
  } = useQuery(
    [QueryKeys.category, user?.id],
    () => getAllCategories(user?.id),
    {
      staleTime: 30000,
      enabled: !!user,
    },
  );

  if (error) {
    showSnackbar({
      message: 'Something went wrong we couldnt find any categories!',
      duration: 3000,
      severity: 'error',
    });
  }

  const categoriesLeft = MAX_CUSTOM_CATEGORIES - (categoryData?.length ?? 0);

  return (
    <Stack marginTop="2em" justifyContent="center" alignItems="center">
      <Box
        width="50%"
        minWidth="360px"
        maxWidth={800}
        sx={{ bgcolor: 'rgba(43, 43, 43, .65)' }}
        color="white"
        borderRadius="12px"
        p={3}
      >
        <Box>
          <Typography
            fontWeight="bolder"
            fontSize="18px"
            color="primary.contrastText"
            text="Categories"
          />

          <Divider sx={{ marginY: '10px' }} />
          <Typography
            fontWeight="bolder"
            fontSize="14px"
            color="primary.contrastText"
            text={`Custom categories: ${categoriesLeft} left`}
          />

          <Box textAlign="center">
            {!categoryData && (
              <Stack
                alignItems="center"
                gap={1}
                marginY="60px"
                sx={{ opacity: 0.7 }}
              >
                <EventBusyOutlinedIcon sx={{ fontSize: '40px' }} />
                <Typography
                  color="primary.contrastText"
                  text="There are no custom categories"
                />
              </Stack>
            )}
            <Stack
              marginTop={1}
              gap="4px"
              flexWrap="wrap"
              flexDirection="row"
              maxHeight="250px"
              overflow="auto"
            >
              {/* !NOTE: Please take it out into separe file or create generic skeleton componentn for handling loading states */}
              {isLoading && (
                <Box mt={2}>
                  <Skeleton
                    animation="wave"
                    sx={{
                      minWidth: '4em',
                      maxWidth: '4em',
                      padding: '28px',
                      borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                    variant="rounded"
                  />
                  <Skeleton variant="text" animation="wave" />
                </Box>
              )}
              {categoryData?.map((category, index) => (
                <CategoryIcon
                  id={category.id}
                  key={index}
                  name={category.name}
                  icon={category.icon}
                  color={category.color}
                />
              ))}
            </Stack>
          </Box>
          <Divider sx={{ marginY: '12px' }} />
          <Box>
            <Typography
              fontWeight="bolder"
              fontSize="14px"
              color="primary.contrastText"
              text="Default categories"
            />
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
                name={category.name}
                icon={category.icon}
                color={category.color}
                id={category.id}
              />
            ))}
          </Stack>
        </Box>
        <Button
          disabled={categoriesLeft === 0}
          text="NEW CATEGORY"
          fullWidth
          onClick={() => handleOpenModal('createCategory')}
        />
      </Box>
      <CustomSnackbar {...snackbarProps} />
    </Stack>
  );
};
