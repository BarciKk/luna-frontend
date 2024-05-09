import { useMutation } from 'react-query';
import { forgotPasswordToken } from '../../../api/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordEmailSchema } from '../../../validation/auth/Auth.validation';
import { ErrorInfo } from '../../../types/Shared.types';
import { AuthWrapper } from '../../Login/Login';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { theme } from '../../../theme';

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
  } = useForm({
    resolver: yupResolver(resetPasswordEmailSchema),
  });
  const { mutate, isLoading } = useMutation(forgotPasswordToken, {
    onSuccess() {
      alert('information modal');
      reset();
    },
    onError: (err: ErrorInfo) => {
      if (err.response) {
        setErrorMessage(`${err.response.data.error}`);
      }
    },
  });

  const onSubmit = async (data: EmailVerification) => {
    const { email } = data;
    mutate(email);
  };

  return (
    <AuthWrapper>
      <Container sx={{ display: 'flex', flexDirection: 'column', width: 500 }}>
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
            }}
          >
            <TextField
              label="name@example.com"
              type="email"
              {...register('email')}
            />
            <Typography textAlign="center" color="error">
              {errors.email?.message || errorMessage}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: theme.spacing(4) }}
              color="primary"
              fullWidth
            >
              {isLoading ? <CircularProgress /> : 'send email'}
            </Button>
          </Container>
        </Box>
      </Container>
    </AuthWrapper>
  );
};
