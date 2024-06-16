import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

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
import { Input } from 'components/Input/Input.component';

export const Register = () => {
  const { t } = useTranslationMessage();
  const { showSnackbar, snackbarProps } = useSnackbar();

  const methods = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      username: '',
      terms: false,
    },
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;
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
            message: err.response.data.error,
            duration: 3000,
            severity: 'error',
          });
        }
      },
    },
  );

  const onSubmit = async (data: RegisterValues) => {
    mutate(data);
    reset();
  };

  return (
    <AuthAnimation>
      <Seo title="LunaSync - Register" description="Auth register" />
      <AuthWrapper>
        <Typography fontSize="36px" m={1} mb={4}>
          {t('auth.signUp')}
        </Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            sx={{ width: '100%', marginTop: 3 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label={t('auth.placeholders.email')}
              type="text"
              name="email"
              sx={{ mb: 1 }}
            />
            <Input
              label="Username"
              name="username"
              type="text"
              sx={{ mb: 1 }}
            />
            <Input
              label={t('auth.placeholders.password')}
              name="password"
              type="password"
              sx={{ mb: 1 }}
            />
            <Input
              label={t('auth.placeholders.repeatPassword')}
              name="repeatPassword"
              type="password"
              sx={{ mb: 1 }}
            />

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
        </FormProvider>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
