import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { deleteCategory } from 'api/category';
import { CustomSnackbar } from 'components/Snackbar';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { useQueryString, useSnackbar, useUser } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { ErrorInfo } from 'types/Shared.types';

export const DeleteCategory = () => {
  const { t } = useTranslation();
  const { getQueryString } = useQueryString();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const categoryId = getQueryString('id');
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () => {
      showSnackbar({
        message: t('category.deleteCategorySuccessMessage'),
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
  });

  const handleDelete = async () => {
    try {
      if (!categoryId) {
        showSnackbar({
          message: t('shared.generalErrorMessage'),
          duration: 3000,
          severity: 'error',
        });
        return;
      }
      mutate(categoryId);
    } catch (err) {
      console.error('Something went wrong!');
    }
  };

  return (
    <>
      {categoryId && (
        <IconButton
          onClick={handleDelete}
          sx={{
            ':hover': {
              color: 'red',
              transition: 'ease-out .3s',
            },
          }}
        >
          <Delete />
        </IconButton>
      )}
      <CustomSnackbar {...snackbarProps} />
    </>
  );
};
