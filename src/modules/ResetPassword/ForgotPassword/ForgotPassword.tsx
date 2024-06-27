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
export const ForgotPassword = () => {
  const { t } = useTranslation();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const methods = useForm<ForgotPasswordForm>({
    resolver: zodResolver(resetPasswordEmailSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });
  const { handleSubmit, reset } = methods;

  const { mutate, isLoading } = useMutation(forgotPassword, {
    onSuccess() {
      showSnackbar({
        message: 'Password reset link sent!',
        duration: 5000,
        severity: 'success',
      });
      reset();
    },
    onError: () => {
      showSnackbar({
        message: 'Failed to send password reset link.',
        duration: 5000,
        severity: 'error',
      });
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
        <Typography fontSize="36px" textAlign="center">
          {t('auth.forgotPassword')}
        </Typography>
        <Typography textAlign="center" variant="h2" m={2}>
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
                style={{
                  display: 'inline-block',
                  color: 'gray',
                }}
                text={'Back to login'}
              />
            </Typography>
          </Box>
        </FormProvider>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
