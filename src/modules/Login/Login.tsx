import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { loginValues } from './login.types';
import { login } from '../../api/auth';
import { cookieKeys } from '../../enums/Auth/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { loginSchema } from '../../validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Link } from '../../components/Link/Link.component';
import { AuthWrapper } from '../../assets/authWrapper';
import { Copyright } from '../../assets/copyright';
import { AuthAnimation } from '../../animations/Auth.animation';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useCookies } from '../../hooks';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setCookie } = useCookies();
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
          data: { token, user },
        } = response;

        if (token && user) {
          setCookie(cookieKeys.jwt, token);
          setCookie(cookieKeys.user, user);
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
    <AuthAnimation>
      <AuthWrapper>
        <Typography textAlign="center" fontSize="36px" m={1}>
          {t('auth.signIn')}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ marginTop: 4, width: '100%' }}
        >
          <TextField
            {...register('username')}
            type="text"
            name="username"
            variant="outlined"
            autoFocus
            fullWidth
            label={t('auth.placeholders.username')}
            sx={{
              mb: '10px',
            }}
            error={!!errors.username}
          />
          <ErrorMessage message={errors.username?.message} />
          <TextField
            {...register('password')}
            name="password"
            type={showPassword ? 'text' : 'password'}
            label={t('auth.placeholders.password')}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((visible) => !visible)}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: 2 }}
            error={!!errors.password}
          />
          <ErrorMessage message={errors.password?.message} />
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
            <Link to={UnauthorizedRoutes.register} text={t('auth.register')} />
          </Typography>
          <Copyright />
        </Box>
      </AuthWrapper>
    </AuthAnimation>
  );
};
