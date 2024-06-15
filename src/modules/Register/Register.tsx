import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useState } from 'react';
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

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from 'hooks/useSnackbar';
import { useTranslationMessage } from 'hooks';
import { registerCall } from 'api/auth';
import { registerSchema } from 'validation/auth';
import { RegisterValues } from './register.types';
import { ErrorInfo } from 'types/Shared.types';
import { AuthAnimation } from 'animations/Auth.animation';
import { AuthWrapper } from 'assets/authWrapper';
import { ErrorMessage } from 'components/ErrorMessage';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { UnauthorizedRoutes } from 'enums/Auth/routes.enums';
import { CustomSnackbar } from 'components/Snackbar';
import { Seo } from 'components/Seo';

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
      <Seo title="LunaSync - Register" description="Auth register" />
      <AuthWrapper>
        <Typography fontSize="36px" m={1} mb={4}>
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
            sx={{ mb: '10px' }}
            onChange={handleInputChange}
          />
          <ErrorMessage message={errors.email?.message} />
          <TextField
            label="Username"
            {...register('username')}
            fullWidth
            name="username"
            error={!!errors.username}
            sx={{ mb: '10px' }}
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
                    onClick={() => setShowPassword((visible) => !visible)}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: '10px' }}
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
                    onClick={() => setShowPassword((visible) => !visible)}
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
          {message && <ErrorMessage mt="10px" message={message} />}
          <FormControlLabel
            control={
              <Checkbox
                {...register('terms')}
                sx={{
                  color: errors.terms ? 'error.main' : 'none',
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
            sx={{ mt: 4, mb: '10px' }}
          />
          <Typography style={{ textAlign: 'center' }} mt={2}>
            {t('auth.haveAccount')}{' '}
            <Link
              to={UnauthorizedRoutes.login}
              style={{ display: 'inline-block' }}
              text={t('auth.login')}
            />
          </Typography>
        </Box>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
