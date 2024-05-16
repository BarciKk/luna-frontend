import { useMutation } from 'react-query';
import { resetPassword } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import { updatePasswordSchema } from '../../../validation/auth/Auth.validation';
import { useParams } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { ErrorInfo } from '../../../types/Shared.types';
import { AuthWrapper } from '../../Login/Login';
import { ResetPasswordForm } from './ResetPassword.types';
import { Link } from '../../../components/Link';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';
import { CustomSnackbar } from '../../../components/Snackbar';
import { useSnackbar } from '../../../hooks/useSnackbar';

export const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const { showSnackbar, snackbarProps } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(updatePasswordSchema),
    mode: 'onChange',
  });
  if (!token) return null;
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const { mutate, isLoading } = useMutation(
    (resetFormValues: ResetPasswordForm) =>
      resetPassword({
        password: resetFormValues.password,
        token: token ?? '',
      }),
    {
      onSuccess() {
        showSnackbar({
          message: 'Password updated correctly !',
          duration: 5000,
          severity: 'success',
        });
      },
      onError: (err: ErrorInfo) => {
        if (err.response) {
          showSnackbar({
            message: 'Something went wrong !',
            duration: 5000,
            severity: 'error',
          });
          setErrorMessage(`${err.response.data.error}`);
        }
      },
    },
  );

  const onSubmit = async (data: ResetPasswordForm) => {
    mutate(data);
  };

  return (
    <AuthWrapper>
      <Typography fontSize="32px" m={1}>
        Update your password
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '100%', marginTop: 3 }}
      >
        <TextField
          {...register('password')}
          label="Enter the new password"
          name="password"
          fullWidth
          autoFocus
          type="password"
          error={!!errors.password || !!errorMessage}
          sx={{ mb: 2 }}
        />
        {errors && <ErrorMessage message={errors.password?.message} />}
        <TextField
          {...register('confirmPassword')}
          type="password"
          label="Repeat the new password"
          name="confirmPassword"
          fullWidth
          error={!!errors.confirmPassword || !!errorMessage}
        />
        {errors && (
          <ErrorMessage
            message={errors.confirmPassword?.message || errorMessage}
          />
        )}
        <Button
          sx={{ mt: 4, mb: 2 }}
          text={'Update password'}
          isLoading={isLoading}
          fullWidth
        />
        <Typography textAlign="end" mt={4}>
          <Link
            to={UnauthorizedRoutes.login}
            style={{
              display: 'inline-block',
              color: 'gray',
            }}
            text={'Back to login'}
          />
        </Typography>
      </Box>
      <CustomSnackbar {...snackbarProps} />
    </AuthWrapper>
  );
};
