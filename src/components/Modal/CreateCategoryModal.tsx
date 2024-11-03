import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { Button } from 'components/Button';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Input } from 'components/Input';
import { useState } from 'react';
import { ColorInput } from 'components/ColorInput';
import { createCategorySchema } from 'validation/auth/Category.validation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Category } from 'types/User.types';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { CustomSnackbar } from 'components/Snackbar';
import { ErrorInfo } from 'types/Shared.types';
import { useMutation } from 'react-query';
import { useSnackbar, useUser } from 'hooks';
import { createCategory } from 'api/category';

export const CreateCategoryModal = () => {
  const [selectedColor, setSelectedColor] = useState('#1b75de');
  const { showSnackbar, snackbarProps } = useSnackbar();
  const { user } = useUser();

  const methods = useForm<Category>({
    resolver: zodResolver(createCategorySchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      color: selectedColor,
      userId: user?.id ?? '',
      icon: <AutoAwesomeIcon />,
    },
  });
  const { handleSubmit, setValue } = methods;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setValue('color', color);
  };

  const { mutate } = useMutation(
    (values: Category) =>
      createCategory({
        name: values.name,
        color: values.color,
        userId: user?.id ?? '',
        icon: 'AutoAwesomeIcon',
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: 'Category created successfully!',
          duration: 3000,
          severity: 'success',
        });
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
      mutate(data);
    } catch (err) {
      console.error('Something went wrong!');
    }
  };

  if (!user) return null;
  return (
    <FormProvider {...methods}>
      <Box padding={1} component="form" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle
          id="create-category-dialog-title"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={0}
          padding={0}
        >
          <Typography fontSize="22px" fontWeight="bolder">
            New category
          </Typography>
          <IconButton>
            <WidgetsIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ minWidth: '550px', padding: 0 }} dividers>
          <Box marginTop="18px">
            <Input name="name" type="text" label="Category name" />
            <ColorInput onColorChange={handleColorChange} name="color" />
          </Box>
        </DialogContent>
        <DialogActions sx={{ paddingX: '3em' }}>
          <Button
            text="CREATE CATEGORY"
            fullWidth
            disabled={user.categories.length >= 5}
          />
        </DialogActions>
        <CustomSnackbar {...snackbarProps} />
      </Box>
    </FormProvider>
  );
};
//
