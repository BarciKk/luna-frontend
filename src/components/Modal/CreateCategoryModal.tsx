import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'components/Button';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Input } from 'components/Input';
import { ColorInput } from 'components/ColorInput';
import { createCategorySchema } from 'validation/auth/Category.validation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Category } from 'types/Category.types';
import { CustomSnackbar } from 'components/Snackbar';
import { ErrorInfo } from 'types/Shared.types';
import { useMutation, useQueryClient } from 'react-query';
import { useQueryString, useSnackbar, useUser } from 'hooks';
import { createCategory, editCategory } from 'api/category';
import { DeleteCategory } from 'modules/Category/DeleteCategory';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { Typography } from 'components/Typography';
import { Box, IconButton } from '@mui/material';
import { IconPicker } from 'components/IconPicker/IconPicker.component';
import { useTranslation } from 'react-i18next';
import { useCategories } from 'hooks/useCategories';
import {
  BASE_ICON_NAME,
  CONCATED_CATEGORIES,
} from 'constants/category.constants';

export const CreateCategoryModal = () => {
  const { t } = useTranslation();
  const { getQueryString } = useQueryString();
  const queryClient = useQueryClient();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const categoryId = getQueryString('id');
  const { user } = useUser();
  const { customCategories } = useCategories();

  const category = customCategories?.find(
    (category: Category) => category.id === categoryId,
  );

  const methods = useForm<Category>({
    resolver: zodResolver(createCategorySchema),
    mode: 'onBlur',
    defaultValues: {
      name: categoryId ? category?.name : '',
      color: categoryId ? category?.color : '#1b75de',
      userId: user?.id ?? '',
      icon: categoryId ? category?.icon : BASE_ICON_NAME,
    },
  });
  const { handleSubmit, setValue, watch } = methods;

  const handleColorChange = (color: string) => {
    setValue('color', color);
  };
  const handleIconSelect = (iconId: string) => {
    setValue('icon', iconId);
  };

  const selectedIcon = watch('icon');

  const { mutate: createCategoryMutate, isLoading } = useMutation(
    (values: Omit<Category, 'id'>) =>
      createCategory({
        name: values.name,
        color: values.color,
        userId: user?.id,
        isBase: false,
        icon: selectedIcon ?? BASE_ICON_NAME,
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: t('category.categoryCreateSuccessMessage'),
          duration: 3000,
          severity: 'success',
        });
        queryClient.invalidateQueries([QueryKeys.category, user?.id]);
      },
      onError: (error: ErrorInfo) => {
        if (error.response) {
          showSnackbar({
            message: error.response.data.message,
            duration: 3000,
            severity: 'error',
          });
        }
      },
    },
  );

  const { mutate: editCategoryMutate } = useMutation(
    (values: Category) =>
      editCategory({
        id: categoryId,
        name: values.name,
        color: values.color,
        userId: user?.id,
        icon: selectedIcon,
        isBase: false,
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: t('category.categoryEditSuccessMessage'),
          duration: 3000,
          severity: 'success',
        });
        queryClient.invalidateQueries([QueryKeys.category, user?.id]);
      },
      onError: (error: ErrorInfo) => {
        if (error.response) {
          showSnackbar({
            message: error.response.data.message,
            duration: 3000,
            severity: 'error',
          });
        }
      },
    },
  );
  const onSubmit: SubmitHandler<Category> = async (data) => {
    try {
      if (categoryId) {
        const hasChanges =
          data.name.trim() !== category?.name ||
          data.color.trim() !== category?.color ||
          !selectedIcon;

        if (!hasChanges) {
          showSnackbar({
            message: t('shared.noChangesMessage'),
            severity: 'info',
            duration: 3000,
          });
          return;
        }
        editCategoryMutate(data);
      } else {
        createCategoryMutate(data);
      }
    } catch (err) {
      console.error('Something went wrong!');
    }
  };

  return (
    <FormProvider {...methods}>
      <Box padding={2} component="form" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle
          id="create-category-dialog-title"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={0}
          padding={0}
        >
          <Typography
            fontSize="22px"
            fontWeight="bolder"
            text={categoryId ? t('shared.edit') : t('category.newCategory')}
            maxLength={15}
          />
          {categoryId ? (
            <DeleteCategory />
          ) : (
            <IconButton color="primary">
              <WidgetsIcon />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent dividers>
          <Box marginTop="18px">
            <Input name="name" type="text" label={t('category.categoryName')} />
            <IconPicker
              data={CONCATED_CATEGORIES}
              onIconSelect={handleIconSelect}
              name={category ? category.icon : BASE_ICON_NAME}
            />
            <ColorInput
              name="color"
              value={watch('color')}
              onColorChange={handleColorChange}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ paddingX: '3em' }}>
          <Button
            isLoading={isLoading}
            text={
              categoryId ? t('shared.update') : t('category.createCategory')
            }
            fullWidth
            disabled={(user?.categories.length ?? 0) >= 5 && !categoryId}
          />
        </DialogActions>
        <CustomSnackbar {...snackbarProps} />
      </Box>
    </FormProvider>
  );
};
//NOTE: Edit category should take only changed values not full object on every request
//!NOTE: Has changed should be rebuild into maybe isDirty?
