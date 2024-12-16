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
import { useTranslation } from 'react-i18next';

export const Category = () => {
  const { t } = useTranslation();
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
      message: t('errors.categoriesNotFound'),
      duration: 3000,
      severity: 'error',
    });
  }
  const categoriesLeft = MAX_CUSTOM_CATEGORIES - (categoryData?.length ?? 0);

  return (
    <Stack marginTop="2em" justifyContent="center" alignItems="center">
      <Box
        minWidth="300px"
        width={{ xs: '80%', sm: '600px', md: '800px' }}
        sx={{ bgcolor: 'rgba(43, 43, 43, .65)' }}
        color="white"
        borderRadius="12px"
        p={3}
      >
        <Typography
          fontWeight="bolder"
          fontSize="18px"
          color="primary.contrastText"
          text={t('category.categories')}
        />
        <Divider sx={{ marginY: '10px' }} />

        <Typography
          fontWeight="bolder"
          fontSize="14px"
          color="primary.contrastText"
          text={`Custom categories: ${categoriesLeft} left`}
        />

        <Box textAlign="center">
          {isLoading ? (
            <Stack
              marginTop={2}
              gap={2}
              flexWrap="wrap"
              flexDirection="row"
              justifyContent="start"
              aria-label="Loading categories"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Box key={index} textAlign="center">
                  <Skeleton
                    animation="wave"
                    sx={{
                      width: '4em',
                      height: '4em',
                      borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                    variant="rounded"
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ marginTop: '0.5em', width: '4em' }}
                  />
                </Box>
              ))}
            </Stack>
          ) : (
            <>
              {categoryData?.length === 0 || !categoryData ? (
                <Stack
                  alignItems="center"
                  gap={1}
                  marginY="60px"
                  sx={{ opacity: 0.7 }}
                >
                  <EventBusyOutlinedIcon sx={{ fontSize: '40px' }} />
                  <Typography
                    color="primary.contrastText"
                    text={t('errors.customCategoriesNotFound')}
                  />
                </Stack>
              ) : (
                <Stack
                  marginTop={1}
                  gap="2px"
                  flexWrap="wrap"
                  flexDirection="row"
                  maxHeight="250px"
                  overflow="hidden"
                  aria-label={t('category.customCategories')}
                >
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
              )}
            </>
          )}
        </Box>

        <Divider sx={{ marginY: '12px' }} />
        <Box>
          <Typography
            fontWeight="bolder"
            fontSize="14px"
            color="primary.contrastText"
            text={t('category.defaultCategories')}
          />
        </Box>
        <Stack
          marginTop={1}
          flexWrap="wrap"
          flexDirection="row"
          maxHeight="250px"
          overflow="hidden"
          aria-label={t('category.defaultCategories')}
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

        <Button
          disabled={categoriesLeft === 0}
          text={t('category.newCategory')}
          fullWidth
          onClick={() => handleOpenModal('createCategory')}
        />
      </Box>
      <CustomSnackbar {...snackbarProps} />
    </Stack>
  );
};
