import { useMutation } from 'react-query';
import { resetPassword } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import { updatePasswordSchema } from '../../../validation/auth/Auth.validation';
import { useParams } from 'react-router-dom';
import { AuthWrapper } from '../../Login/Login';
import { Box, Container, TextField, Typography } from '@mui/material';
import { theme } from '../../../theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { ErrorInfo } from '../../../types/Shared.types';

type ResetPasswordForm = { password: string; confirmPassword: string };

export const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();

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
      onSuccess(response) {
        console.log(response);
        //!NOTE implement snackbar
      },
      onError: (err: ErrorInfo) => {
        if (err.response) {
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
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Container
          sx={{
            gap: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
          }}
        >
          <Typography
            textAlign="center"
            sx={{ marginBottom: theme.spacing(4) }}
            variant="h2"
            fontSize="24px"
          >
            Update your password
          </Typography>
          <TextField
            {...register('password')}
            label="Enter the new password"
            name="password"
            type="password"
            error={!!errors.password || !!errorMessage}
          />
          {errors && (
            <Typography color="error" textAlign="center">
              {errors.password?.message}
            </Typography>
          )}
          <TextField
            {...register('confirmPassword')}
            type="password"
            label="Repeat the new password"
            name="confirmPassword"
            error={!!errors.confirmPassword || !!errorMessage}
          />
          {errors && (
            <ErrorMessage
              message={errors.confirmPassword?.message || errorMessage}
            />
          )}

          <Button text={'Update password'} isLoading={isLoading} />
        </Container>
      </Box>
    </AuthWrapper>
  );
};
