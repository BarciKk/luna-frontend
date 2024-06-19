import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { AuthorizedRoutes, UnauthorizedRoutes } from 'enums/Auth/routes.enums';
import { useCookies } from 'hooks/useCookies';
import { Link } from 'components/Link/Link.component';
import { AuthWrapper } from 'assets/AuthWrapper';
import { Copyright } from 'assets/Copyright';
import { ErrorMessage } from 'components/ErrorMessage';
import { Button } from 'components/Button';
import { loginSchema } from 'validation/auth';
import { login } from 'api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthAnimation } from 'animations/Auth.animation';
import { cookieKeys } from 'enums/Auth/cookiesKeys.enums';
import { loginValues } from 'modules/ResetPassword/ForgotPassword/login.types';
import { Seo } from 'components/Seo';
import { Input } from 'components/Input/Input.component';

export const Login = () => {
  const { setCookie } = useCookies();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const { mutate, isLoading, isError } = useMutation(
    (values: loginValues) => login(values),
    {
      onSuccess: (response) => {
        const {
          data: { token, user },
        } = response;

        if (token && user) {
          setCookie(cookieKeys.jwt, token);
          setCookie(cookieKeys.user, user);
          navigate(`${AuthorizedRoutes.today}`);
        }
      },

      onError: (error: Error) => {
        console.error(t('errors.incorrectLoginOrPassword') + error);
      },
    },
  );

  const onSubmit: SubmitHandler<loginValues> = async (data) => {
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
              name="username"
              type="text"
              label={t('auth.placeholders.username')}
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
    </AuthAnimation>
  );
};
