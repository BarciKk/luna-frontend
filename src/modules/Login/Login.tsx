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
import { Box, TextField, Typography } from '@mui/material';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Link } from '../../components/Link/Link.component';
import { AuthWrapper } from '../../assets/authWrapper';
import { Copyright } from '../../assets/copyright';

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
      <Typography textAlign="center" fontSize="32px" m={1}>
        {t('auth.signIn')}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ marginTop: 3, width: '100%' }}
      >
        <TextField
          {...register('username')}
          type="text"
          name="username"
          variant="outlined"
          autoFocus
          fullWidth
          label={t('auth.placeholders.username')}
          sx={{ mb: 2 }}
          error={!!errors.username}
        />
        <ErrorMessage message={errors.username?.message} />
        <TextField
          {...register('password')}
          name="password"
          type="password"
          label={t('auth.placeholders.password')}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          error={!!errors.password}
        />
        <ErrorMessage message={errors.password?.message} />
        <Link
          text={t('auth.forgotPassword')}
          sx={{ textAlign: 'end', display: 'inline-block' }}
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
          <Link to={UnauthorizedRoutes.register} text={t('auth.register')} />
        </Typography>
        <Copyright />
      </Box>
    </AuthWrapper>
  );
};

/* login:TestUser123
  password:testtest1 */

//could be fun to implement change language as well if u are already using i18next
//!NOTE: Tbh create own input component to handle everything perfectly (at least try) register difference between password/text Input (dont forget about the show password option and see how it looks like with icon (not really necessary))
//!NOTE i mean work around the animation when finished earlier steps
//!NOTE FINISH UNTIL FRIDAY AND we gonna be happy :)
