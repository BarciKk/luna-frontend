import { useMutation } from 'react-query';
import { resetPassword } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import { updatePasswordSchema } from '../../../validation/auth/Auth.validation';
import { ErrorInfo } from '../../../types/Shared.types';
import { useParams } from 'react-router-dom';
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
import { zodResolver } from '@hookform/resolvers/zod';

type ResetPasswordForm = { password: string; confirmPassword: string };

export const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(updatePasswordSchema),
    mode: 'onChange',
  });
  if (!token) return null;

  const { mutate, isLoading } = useMutation(
    (resetFormValues: ResetPasswordForm) =>
      resetPassword({
        password: resetFormValues.password,
        token: token ?? '',
      }),
    {
      onSuccess(response) {
        console.log(response);
        //!NOTE implement snackbar
      },
      onError: (err: ErrorInfo) => {
        //!NOTE: display it to the user
        console.log(err.response?.data?.message || 'An error occurred');
      },
    },
  );

  const onSubmit = async (data: ResetPasswordForm) => {
    mutate(data);
  };

  return (
    <AuthWrapper>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Container
          sx={{
            gap: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
          }}
        >
          <Typography
            textAlign="center"
            sx={{ marginBottom: theme.spacing(4) }}
            variant="h2"
            fontSize="24px"
          >
            Update your password
          </Typography>
          <TextField
            {...register('password')}
            label="Enter the new password"
            name="password"
            type="password"
          />
          {errors && (
            <Typography color="error" textAlign="center">
              {errors.password?.message}
            </Typography>
          )}
          <TextField
            {...register('confirmPassword')}
            type="password"
            label="Repeat the new password"
            name="confirmPassword"
          />
          {errors && (
            <Typography color="error" textAlign="center">
              {errors.confirmPassword?.message}
            </Typography>
          )}
          <Button
            sx={{ marginTop: theme.spacing(4) }}
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
          >
            {isLoading ? <CircularProgress /> : 'Update Password'}
          </Button>
        </Container>
      </Box>
    </AuthWrapper>
  );
};
