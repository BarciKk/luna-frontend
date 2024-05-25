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
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { ErrorMessage } from '../../components/ErrorMessage';
import { CustomSnackbar } from '../../components/Snackbar';
import { useSnackbar } from '../../hooks/useSnackbar';
import { AuthWrapper } from '../../assets/authWrapper';
import { AuthAnimation } from '../../animations';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type registerForm = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
  terms: boolean;
};

export const Register = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslationMessage();
  const { showSnackbar, snackbarProps } = useSnackbar();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const { mutate, isLoading } = useMutation(
    (values: RegisterValues) => registerCall(values),
    {
      onSuccess: () => {
        showSnackbar({
          message: 'Registration complete now u can login into your account',
          duration: 3000,
          severity: 'success',
        });
        reset();
      },

      onError: (err: ErrorInfo) => {
        if (err.response) {
          showSnackbar({
            message: 'Something went wrong !',
            duration: 3000,
            severity: 'error',
          });
          setMessage(`${err.response.data.error}`);
        }
      },
    },
  );
  const onSubmit = async (data: RegisterValues) => {
    mutate(data);
    reset();
  };
  const handleInputChange = () => {
    setMessage(null);
  };

  return (
    <AuthAnimation>
      <AuthWrapper>
        <Typography fontSize="32px" m={1}>
          {t('auth.signUp')}
        </Typography>

        <Box
          component="form"
          sx={{ width: '100%', marginTop: 3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            error={!!errors.email}
            label={t('auth.placeholders.email')}
            fullWidth
            {...register('email')}
            name="email"
            autoFocus
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <ErrorMessage message={errors.email?.message} />
          <TextField
            label="Username"
            {...register('username')}
            fullWidth
            name="username"
            error={!!errors.username}
            sx={{ mb: 2 }}
          />
          <ErrorMessage message={errors.username?.message} />
          <TextField
            label={t('auth.placeholders.password')}
            {...register('password')}
            name="password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((e) => !e)}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
            error={!!errors.password}
          />
          <ErrorMessage message={errors.password?.message} />
          <TextField
            label={t('auth.placeholders.repeatPassword')}
            {...register('repeatPassword')}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((e) => !e)}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!errors.repeatPassword}
            name="repeatPassword"
          />
          <ErrorMessage message={errors.repeatPassword?.message} />
          {message && <ErrorMessage mt={2} message={message} />}
          <FormControlLabel
            control={
              <Checkbox
                {...register('terms')}
                sx={{
                  color: errors.terms ? theme.palette.error.main : 'none',
                }}
              />
            }
            label={t('auth.acceptTerms')}
          />

          <ErrorMessage message={errors.terms?.message} />
          <Button
            fullWidth
            text={t('auth.signUp')}
            isLoading={isLoading}
            sx={{ mt: 4, mb: 2 }}
          />
          <Typography style={{ textAlign: 'center' }} mt={2}>
            {t('auth.haveAccount')}{' '}
            <Link
              to={UnauthorizedRoutes.login}
              style={{ display: 'inline-block' }}
              text={t('auth.login')}
            ></Link>
          </Typography>
        </Box>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
