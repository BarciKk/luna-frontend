import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography } from '@mui/material';

import { useSnackbar } from 'hooks/useSnackbar';
import { useTranslationMessage } from 'hooks';
import { registerCall } from 'api/auth';
import { registerSchema } from 'validation/auth';
import { RegisterValues } from './register.types';
import { ErrorInfo } from 'types/Shared.types';
import { AuthAnimation } from 'animations/Auth.animation';
import { AuthWrapper } from 'helpers/AuthWrapper';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { UnauthorizedRoutes } from 'enums/Routes.enums';
import { CustomSnackbar } from 'components/Snackbar';
import { Seo } from 'components/Seo';
import { Input } from 'components/Input/Input.component';
import { Checkbox } from 'components/Checkbox/Checkbox.component';

export const Register = () => {
  const { t } = useTranslationMessage();
  const { showSnackbar, snackbarProps } = useSnackbar();

  const methods = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      username: '',
      terms: false,
    },
  });

  const { reset, handleSubmit } = methods;
  const { mutate, isLoading } = useMutation(
    (values: RegisterValues) => registerCall(values),
    {
      onSuccess: () => {
        showSnackbar({
          message: t('auth.registerSuccessMessage'),
          duration: 3000,
          severity: 'success',
        });
        reset();
      },

      onError: (err: ErrorInfo) => {
        if (err.response) {
          showSnackbar({
            message: err.response.data.message,
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
        <Typography fontSize="36px" m={1} mb={2} color="text.primary">
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
            />
            <Input
              label={t('auth.placeholders.username')}
              name="username"
              type="text"
            />
            <Input
              label={t('auth.placeholders.password')}
              name="password"
              type="password"
            />
            <Input
              label={t('auth.placeholders.repeatPassword')}
              name="repeatPassword"
              type="password"
            />
            <Checkbox name="terms" label={t('auth.acceptTerms')} />
            <Button
              fullWidth
              text={t('auth.signUp')}
              isLoading={isLoading}
              sx={{ mt: 4, mb: '10px' }}
            />
            <Typography
              fontSize="14px"
              textAlign="center"
              color="text.secondary"
            >
              {t('auth.haveAccount')}{' '}
              <Link to={UnauthorizedRoutes.login} text={t('auth.login')} />
            </Typography>
          </Box>
        </FormProvider>
        <CustomSnackbar {...snackbarProps} />
      </AuthWrapper>
    </AuthAnimation>
  );
};
