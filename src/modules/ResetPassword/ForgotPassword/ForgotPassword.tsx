import { useMutation } from 'react-query';
import { forgotPasswordToken } from '../../../api/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { resetPasswordEmailSchema } from '../../../validation/auth/Auth.validation';
import { ErrorInfo } from '../../../types/Shared.types';
import { AuthWrapper } from '../../Login/Login';
import { Box, Container, TextField, Typography } from '@mui/material';
import { theme } from '../../../theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';

type EmailVerification = {
  email: string;
};
export const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailVerification>({
    resolver: zodResolver(resetPasswordEmailSchema),
    mode: 'onChange',
  });
  const { mutate, isLoading } = useMutation(forgotPasswordToken, {
    onSuccess() {
      //!NOTE implement snackbar
      reset();
    },
    onError: (err: ErrorInfo) => {
      if (err.response) {
        setErrorMessage(`${err.response.data.error}`);
      }
    },
  });

  const onSubmit = async ({ email }: EmailVerification) => {
    mutate(email);
  };

  return (
    <AuthWrapper>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          fontSize="24px"
          sx={{ marginBottom: theme.spacing(2) }}
          textAlign="center"
        >
          Enter your email
        </Typography>
        <Typography variant="h1" textAlign="center">
          We re going to send a code verification to this email
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ marginTop: theme.spacing(4) }}
        >
          <Container
            sx={{
              gap: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
              width: '500px',
            }}
          >
            <TextField label="E-MAIL" {...register('email')} />
            <Typography textAlign="center" color="error">
              {errors.email?.message || errorMessage}
            </Typography>

            <Button text={'send email'} isLoading={isLoading} />
          </Container>
        </Box>
      </Container>
    </AuthWrapper>
  );
};
