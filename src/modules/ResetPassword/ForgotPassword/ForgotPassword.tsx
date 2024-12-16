import { useMutation } from 'react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { ForgotPasswordForm } from './forgotPassword.types';
import { resetPasswordEmailSchema } from 'validation/auth/Auth.validation';
import { forgotPassword } from 'api/auth';
import { AuthAnimation } from 'animations';
import { AuthWrapper } from 'assets/AuthWrapper';
import { Button } from 'components/Button';
import { UnauthorizedRoutes } from 'enums/Routes.enums';
import { Link } from 'components/Link';
import { CustomSnackbar } from 'components/Snackbar';
import { useSnackbar } from 'hooks';
import { Seo } from 'components/Seo';
import { Input } from 'components/Input/Input.component';
import { ErrorInfo } from 'types/Shared.types';

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const methods = useForm<ForgotPasswordForm>({
    resolver: zodResolver(resetPasswordEmailSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });
  const { handleSubmit, reset } = methods;

  const { mutate, isLoading } = useMutation(forgotPassword, {
    onSuccess() {
      showSnackbar({
        message: t('auth.forgotPasswordSuccessMessage'),
        duration: 5000,
        severity: 'success',
      });
      reset();
    },
    onError: (error: ErrorInfo) => {
      if (error.response) {
        showSnackbar({
          message: error.response.data.message,
          duration: 5000,
          severity: 'error',
        });
        reset();
      }
    },
  });

  const onSubmit = async ({ email }: ForgotPasswordForm) => {
    mutate(email);
  };

  return (
    <AuthAnimation>
      <Seo
        title="LunaSync - Forgot Password"
        description="auth forgot password"
      />
      <AuthWrapper>
        <Typography fontSize="36px" textAlign="center" color="text.primary">
          {t('auth.forgotPassword')}
        </Typography>
        <Typography
          textAlign="center"
          fontSize="14px"
          m={2}
          color="text.secondary"
        >
          {t('auth.forgotPasswordMessage')}
        </Typography>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '100%', marginTop: 3 }}
          >
            <Input
              name="email"
              type="text"
              label={t('auth.placeholders.email')}
              sx={{ marginTop: 3 }}
            />

            <Button
              text={t('auth.sendEmail')}
              fullWidth
              isLoading={isLoading}
              sx={{ mt: 4, mb: 2 }}
            />
            <Typography textAlign="end" mt={4}>
              <Link
                to={UnauthorizedRoutes.login}
                sx={{
                  color: 'text.secondary',
                  display: 'inline-block',
                }}
                text={t('auth.backLogin')}
              />
            </Typography>
          </Box>
        </FormProvider>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
