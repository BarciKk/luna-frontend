import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { AuthorizedRoutes, UnauthorizedRoutes } from 'enums/Routes.enums';
import { Link } from 'components/Link/Link.component';
import { AuthWrapper } from 'assets/AuthWrapper';
import { Copyright } from 'assets/Copyright';
import { ErrorMessage } from 'components/ErrorMessage';
import { Button } from 'components/Button';
import { loginSchema } from 'validation/auth';
import { login } from 'api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthAnimation } from 'animations/Auth.animation';
import { LoginValues } from 'modules/ResetPassword/ForgotPassword/login.types';
import { Seo } from 'components/Seo';
import { Input } from 'components/Input/Input.component';
import { useSnackbar, useUser } from 'hooks';
import { ErrorInfo } from 'types/Shared.types';
import { CustomSnackbar } from 'components/Snackbar';

export const Login = () => {
  const { setUser } = useUser();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const { mutate, isLoading, isError } = useMutation(
    (values: LoginValues) => login(values),
    {
      onSuccess: (response) => {
        const {
          data: { jwt, user },
        } = response;
        if (jwt && user) {
          setUser(user, jwt);
          navigate(`${AuthorizedRoutes.today}`);
        }
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

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    try {
      mutate(data);
    } catch (err) {
      console.error(t('errors.incorrectLoginOrPassword') + err);
    }
  };

  return (
    <AuthAnimation>
      <Seo title="LunaSync - Login" description="Auth login" />
      <AuthWrapper>
        <Typography textAlign="center" fontSize="36px" m={1}>
          {t('auth.signIn')}
        </Typography>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ marginTop: 4, width: '100%' }}
          >
            <Input
              name="email"
              type="text"
              label={t('auth.placeholders.email')}
            />
            <Input
              name="password"
              type="password"
              label={t('auth.placeholders.password')}
            />
            <Link
              text={t('auth.forgotPassword')}
              to={UnauthorizedRoutes.forgotPassword}
            />
            {isError && (
              <ErrorMessage message={t('errors.incorrectLoginOrPassword')} />
            )}
            <Button
              sx={{ mt: 4, mb: 2 }}
              text={t('auth.login')}
              fullWidth
              isLoading={isLoading}
            />
            <Typography variant="body2" textAlign="center" mt={2}>
              {t('auth.firstPartOfRegisterMessage')}{' '}
              <Link
                to={UnauthorizedRoutes.register}
                text={t('auth.register')}
              />
            </Typography>
            <Copyright />
          </Box>
        </FormProvider>
      </AuthWrapper>
      <CustomSnackbar {...snackbarProps} />
    </AuthAnimation>
  );
};
