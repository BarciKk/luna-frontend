import { Box, Divider, Skeleton, Stack } from '@mui/material';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import { Button } from 'components/Button';

import { CategoryIcon } from 'components/CategoryIcon/CategoryIcon.component';
import { MAX_CUSTOM_CATEGORIES } from 'constants/user.constants';
import { useModal } from 'providers/ModalProvider';
import { Typography } from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { useCategories } from 'hooks/useCategories';

export const Category = () => {
  const { t } = useTranslation();
  const { handleOpenModal } = useModal();
  const { customCategories, baseCategories, isLoading } = useCategories();
  const categoriesLeft =
    MAX_CUSTOM_CATEGORIES - (customCategories?.length ?? 0);

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
              {customCategories?.length === 0 || !customCategories ? (
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
                  {customCategories?.map((category) => (
                    <CategoryIcon
                      id={category.id}
                      key={category.id}
                      name={category.name}
                      icon={category.icon}
                      color={category.color}
                      isBase={category.isBase}
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
          {baseCategories.map((category) => (
            <CategoryIcon
              key={category.id}
              name={category.name}
              icon={category.icon}
              color={category.color}
              id={category.id}
              isBase={category.isBase}
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
    </Stack>
  );
};
