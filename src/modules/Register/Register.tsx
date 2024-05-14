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
import { Box, Container, TextField, Typography } from '@mui/material';
import { AuthWrapper } from '../Login/Login';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';

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
        //!NOTE implement snackbar
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
          variant="h1"
          fontSize="32px"
          textAlign="center"
          sx={{ marginBottom: theme.spacing(3) }}
        >
          Register now
        </Typography>
        <Typography
          color="gray"
          sx={{ marginBottom: theme.spacing(4), textAlign: 'center' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          voluptas quam amet corporis! Aliquid modi distinctio quibusdam aperiam
          dolorem
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
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Typography>
              {t('auth.firstPartOfTermsMessage')}
              <Link
                to={UnauthorizedRoutes.termsAndConditions}
                text={t('auth.terms')}
              />
            </Typography>
            <Link
              to={UnauthorizedRoutes.login}
              style={{
                color: 'darkerFontColors.1',
              }}
              text={t('auth.loginRedirectMessage')}
            />
          </Box>
          <Button
            sx={{ marginTop: '2em' }}
            text={t('auth.signUn')}
            isLoading={isLoading}
          />
        </Container>
      </Box>
    </AuthWrapper>
  );
};

//NOTE: u should also create own error message component
//Note: link as well same as your current one but with sx/style prop and more "elastic"
