import { Link } from 'react-router-dom';
import { registerCall } from '../../api/auth';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { useForm } from 'react-hook-form';
import { RegisterValues } from './register.types';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { registerSchema } from '../../validation/auth';
import { useTranslationMessage } from '../../hooks';
import { ErrorInfo } from '../../types/Shared.types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { AuthWrapper } from '../Login/Login';
import { theme } from '../../theme';
export const Register = () => {
  const [message, setMessage] = useState<string | null>(null);
  const { t } = useTranslationMessage();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const { mutate, isLoading } = useMutation(
    (values: RegisterValues) => registerCall(values),
    {
      onSuccess: () => {
        setMessage(t('auth.registerMessage'));
        reset();
      },

      onError: (err: ErrorInfo) => {
        if (err.response) {
          setMessage(`${err.response.data.error}`);
        }
      },
    },
  );
  const onSubmit = async (data: RegisterValues) => {
    mutate(data);
    reset();
  };

  return (
    <AuthWrapper>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ maxWidth: '500px', width: '100%' }}
      >
        <Typography
          variant="h2"
          fontSize="24px"
          textAlign="center"
          sx={{ marginBottom: theme.spacing(4) }}
        >
          {t('auth.registerMotivationMessage')}
        </Typography>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
          }}
        >
          <TextField
            error={!!errors.email}
            label="E-MAIL"
            {...register('email')}
            name="email"
          />
          <Typography color="error" textAlign="center">
            {errors.email?.message}
          </Typography>
          <TextField
            label="Username"
            {...register('username')}
            name="username"
            error={!!errors.username}
          />
          <Typography color="error" textAlign="center">
            {errors.username?.message}
          </Typography>
          <TextField
            label={t('auth.placeholders.password')}
            {...register('password')}
            name="password"
            type="password"
            error={!!errors.password}
          />
          <Typography color="error" textAlign="center">
            {errors.password?.message}
          </Typography>
          <TextField
            label={t('auth.placeholders.repeatPassword')}
            {...register('repeatPassword')}
            type="password"
            error={!!errors.repeatPassword}
            name="repeatPassword"
          />
          <Typography color="error" textAlign="center">
            {errors.repeatPassword?.message}
          </Typography>
          {message && <Typography textAlign="center">{message}</Typography>}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Typography fontSize="small">
              {t('auth.firstPartOfTermsMessage')}
              <Link to={UnauthorizedRoutes.termsAndConditions}>
                {t('auth.terms')}
              </Link>
            </Typography>
            <Box textAlign="end">
              <Link
                to={UnauthorizedRoutes.login}
                style={{
                  color: 'darkerFontColors.1',
                }}
              >
                <Typography fontSize="small">
                  {t('auth.loginRedirectMessage')}
                </Typography>
              </Link>
            </Box>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: theme.spacing(4) }}
            color="primary"
            fullWidth
          >
            {isLoading ? <CircularProgress /> : t('auth.signUn')}
          </Button>
        </Container>
      </Box>
    </AuthWrapper>
  );
};
