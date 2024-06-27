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
import { AuthWrapper } from 'assets/AuthWrapper';
import { UnauthorizedRoutes } from 'enums/Routes.enums';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { CustomSnackbar } from 'components/Snackbar';
import { ErrorInfo } from 'types/Shared.types';
import { Seo } from 'components/Seo';
import { Input } from 'components/Input/Input.component';

export const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const { showSnackbar, snackbarProps } = useSnackbar();

  const methods = useForm<ResetPasswordForm>({
    resolver: zodResolver(updatePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const { handleSubmit } = methods;
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
        <Typography fontSize="36px" m={1} mb={4}>
          Update your password
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
              label="Enter the new password"
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Repeat the new password"
            />
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
        </FormProvider>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
