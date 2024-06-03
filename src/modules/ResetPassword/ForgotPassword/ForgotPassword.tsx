import { useMutation } from 'react-query';
import { forgotPassword } from '../../../api/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { resetPasswordEmailSchema } from '../../../validation/auth/Auth.validation';
import { ErrorInfo } from '../../../types/Shared.types';
import { Box, TextField, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/Link';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';
import { ForgotPasswordForm } from './forgotPassword.types';
import { useSnackbar } from '../../../hooks/useSnackbar';
import { CustomSnackbar } from '../../../components/Snackbar/Snackbar.component';
import { AuthWrapper } from '../../../assets/authWrapper';
import { AuthAnimation } from '../../../animations';

export const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { t } = useTranslation();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(resetPasswordEmailSchema),
    mode: 'onChange',
  });
  const { mutate, isLoading } = useMutation(forgotPassword, {
    onSuccess() {
      showSnackbar({
        message: 'Password reset link sent!',
        duration: 5000,
        severity: 'success',
      });
      reset();
    },
    onError: (err: ErrorInfo) => {
      showSnackbar({
        message: 'Failed to send password reset link.',
        duration: 5000,
        severity: 'error',
      });
      if (err.response) {
        setErrorMessage(`${err.response.data.error}`);
      }
    },
  });

  const onSubmit = async ({ email }: ForgotPasswordForm) => {
    mutate(email);
  };

  return (
    <AuthAnimation>
      <AuthWrapper>
        <Typography fontSize="36px" textAlign="center">
          {t('auth.forgotPassword')}
        </Typography>
        <Typography textAlign="center" variant="h2" m={2}>
          {t('auth.forgotPasswordMessage')}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: '100%', marginTop: 3 }}
        >
          <TextField
            fullWidth
            label={t('auth.placeholders.email')}
            sx={{ marginTop: 3, marginBottom: 1 }}
            autoFocus
            {...register('email')}
            name="email"
          />
          <ErrorMessage message={errors.email?.message || errorMessage} />
          <Button
            text={t('auth.sendEmail')}
            fullWidth
            isLoading={isLoading}
            sx={{ mt: 4, mb: 2 }}
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
    </AuthAnimation>
  );
};
