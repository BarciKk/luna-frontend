import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import Cookies from 'universal-cookie';
import { loginValues } from './login.types';
import { login } from '../../api/auth';
import { cookieKeys } from '../../enums/Auth/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { loginSchema } from '../../validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Container, Grid, TextField } from '@mui/material';
import { theme } from '../../theme';
import { PropsWithChildren } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Link } from '../../components/Link/Link.component';

export const AuthWrapper = ({ children }: PropsWithChildren) => (
  <Container
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    }}
  >
    {children}
  </Container>
);

export const Login = () => {
  const cookies = new Cookies(null, { path: '/' });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });
  const { mutate, isLoading, isError } = useMutation(
    (values: loginValues) => login(values),
    {
      onSuccess: (response) => {
        const {
          data: { jwt, user },
        } = response;

        if (jwt && user) {
          cookies.set(cookieKeys.jwt, jwt, { maxAge: 3600 });
          cookies.set(cookieKeys.user, user);
          navigate('/');
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
    <AuthWrapper>
      <Container
        component="main"
        style={{
          maxWidth: '500px',
          width: '100%',
          borderRadius: theme.spacing(2),
          padding: '1em',
        }}
      >
        <Avatar
          alt="smilie face"
          src="https://i.pinimg.com/474x/82/89/82/828982474d13dd8d8e42b2948149ffb1.jpg"
          sx={{ marginBottom: theme.spacing(5), marginX: 'auto' }}
        />
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Container
            sx={{
              gap: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              {...register('username')}
              type="text"
              variant="outlined"
              label={t('auth.placeholders.username')}
              fullWidth
              error={!!errors.username}
            />
            {errors.username && (
              <ErrorMessage message={errors.username.message} />
            )}
            <TextField
              {...register('password')}
              name="password"
              type="password"
              label={t('auth.placeholders.password')}
              variant="outlined"
              fullWidth
              error={!!errors.password}
            />

            {errors.password && (
              <ErrorMessage message={errors?.password.message} />
            )}
            <Link
              textAlign="end"
              text={t('auth.forgotPassword')}
              to={UnauthorizedRoutes.forgotPassword}
            />
            {isError && (
              <ErrorMessage message={t('errors.incorrectLoginOrPassword')} />
            )}
            <Button text={t('auth.login')} isLoading={isLoading} />
            <Grid container justifyContent="flex-end">
              <Grid item fontSize="small">
                {t('auth.firstPartOfRegisterMessage')}
                <Link
                  fontSize="small"
                  to={UnauthorizedRoutes.register}
                  text={t('auth.register')}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </AuthWrapper>
  );
};

/* login:TestUser123
  password:testtest1 */

//i should work areound the auth wrapper to make that more friendly to the user
//could be fun to implement change language as well if u are already using i18next
