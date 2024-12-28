import { useMutation } from 'react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSnackbar } from 'hooks';
import { ResetPasswordForm } from './ResetPassword.types';
import { updatePasswordSchema } from 'validation/auth/Auth.validation';
import { resetPassword } from 'api/auth';
import { AuthAnimation } from 'animations';
import { AuthWrapper } from 'helpers/AuthWrapper';
import { UnauthorizedRoutes } from 'enums/Routes.enums';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { CustomSnackbar } from 'components/Snackbar';
import { ErrorInfo } from 'types/Shared.types';
import { Seo } from 'components/Seo';
import { Input } from 'components/Input/Input.component';
import { useTranslation } from 'react-i18next';

export const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const { t } = useTranslation();

  const methods = useForm<ResetPasswordForm>({
    resolver: zodResolver(updatePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const { handleSubmit, reset } = methods;
  if (!token) return null;
  const { mutate, isLoading } = useMutation(
    (resetFormValues: ResetPasswordForm) =>
      resetPassword({
        password: resetFormValues.password,
        token: token ?? '',
      }),
    {
      onSuccess() {
        showSnackbar({
          message: t('auth.resetPasswordSuccessMessage'),
          duration: 5000,
          severity: 'success',
        });
        reset();
      },
      onError: (err: ErrorInfo) => {
        if (err.response) {
          showSnackbar({
            message: err.response.data.message,
            duration: 5000,
            severity: 'error',
          });
          reset();
        }
      },
    },
  );

  const onSubmit = async (data: ResetPasswordForm) => {
    mutate(data);
  };

  return (
    <AuthAnimation>
      <Seo
        title="LunaSync - Reset Password"
        description="auth reset password"
      />
      <AuthWrapper>
        <Typography fontSize="36px" m={1} mb={4} color="text.primary">
          {t('auth.updatePasswordLong')}
        </Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '100%', marginTop: 3 }}
          >
            <Input
              type="password"
              name="password"
              label={t('auth.placeholders.password')}
            />
            <Input
              type="password"
              name="confirmPassword"
              label={t('auth.placeholders.repeatPassword')}
            />
            <Button
              sx={{ mt: 4, mb: 2 }}
              text={t('auth.updatePasswordShort')}
              isLoading={isLoading}
              fullWidth
            />
            <Typography textAlign="end" mt={4}>
              <Link
                to={UnauthorizedRoutes.login}
                sx={{
                  display: 'inline-block',
                  color: 'text.secondary',
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
