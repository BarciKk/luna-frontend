import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import Cookies from 'universal-cookie';
import { loginValues } from './login.types';
import { login } from '../../api/auth';
import { cookieKeys } from '../../enums/Auth/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/auth';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { theme } from '../../theme';
import { PropsWithChildren } from 'react';

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
  } = useForm<loginValues>({ resolver: yupResolver(loginSchema) });
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
              <Typography textAlign="center" color="error">
                {errors.username.message}
              </Typography>
            )}
            <TextField
              {...register('password')}
              type="password"
              label={t('auth.placeholders.password')}
              variant="outlined"
              fullWidth
              error={!!errors.password}
            />
            {errors.password && (
              <Typography textAlign="center" color="error">
                {errors.password.message}
              </Typography>
            )}
            <Typography textAlign="end">
              <Link to={UnauthorizedRoutes.forgotPassword}>
                {t('auth.forgotPassword')}
              </Link>
            </Typography>
            <Typography
              display={isError ? 'block' : 'none'}
              color="error"
              textAlign="center"
            >
              {t('errors.incorrectLoginOrPassword')}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: theme.spacing(4) }}
              color="primary"
              fullWidth
            >
              {isLoading ? <CircularProgress /> : t('auth.login')}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item fontSize="small">
                {t('auth.firstPartOfRegisterMessage')}
                <Link to={UnauthorizedRoutes.register}>
                  {t('auth.register')}
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </AuthWrapper>
  );
};
