import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'components/Button';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Input } from 'components/Input';
import { ColorInput } from 'components/ColorInput';
import { createCategorySchema } from 'validation/auth/Category.validation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Category } from 'types/User.types';
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
import { CUSTOM_CATEGORIES } from 'constants/category.constants';

export const CreateCategoryModal = () => {
  const { getQueryString } = useQueryString();
  const queryClient = useQueryClient();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const categoryId = getQueryString('id');
  const { user } = useUser();
  const categories = queryClient.getQueryData<Category[]>([
    QueryKeys.category,
    user?.id,
  ]);

  const category = categories?.find(
    (category: Category) => category.id === categoryId,
  );

  const methods = useForm<Category>({
    resolver: zodResolver(createCategorySchema),
    mode: 'onBlur',
    defaultValues: {
      name: categoryId ? category?.name : '',
      color: categoryId ? category?.color : '#1b75de',
      userId: user?.id ?? '',
      icon: '',
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
        icon: selectedIcon || 'autoawesome',
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: 'Category created successfully!',
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
      //brother u know that u can just pass to the request anything that changed ? dont have to pass everything
      editCategory({
        id: categoryId,
        name: values.name,
        color: values.color,
        userId: user?.id,
        icon: selectedIcon === '' ? category?.icon : selectedIcon,
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: 'Category updated successfully!',
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
          selectedIcon !== '';

        if (!hasChanges) {
          showSnackbar({
            message: 'No changes detected to update',
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
      <Box padding={3} component="form" onSubmit={handleSubmit(onSubmit)}>
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
            text={categoryId ? 'Edit' : 'New category'}
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
            <Input name="name" type="text" label="Category name" />
            <IconPicker
              iconData={CUSTOM_CATEGORIES}
              onIconSelect={handleIconSelect}
              name={category ? category.icon : 'autoawesome'}
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
            text={categoryId ? 'UPDATE' : 'CREATE CATEGORY'}
            fullWidth
            disabled={(user?.categories.length ?? 0) >= 5 && !categoryId}
          />
        </DialogActions>
        <CustomSnackbar {...snackbarProps} />
      </Box>
    </FormProvider>
  );
};
