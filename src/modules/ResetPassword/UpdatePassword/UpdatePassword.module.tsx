import { useMutation } from 'react-query';
import { updateUserPassword } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePasswordSchema } from '../../../validation/auth/Auth.validation';
import { ErrorInfo } from '../../../types/Shared.types';
import { UpdatePasswordType } from './UpdatePassword.types';
import { useParams } from 'react-router-dom';

export const EnterNewPassword = () => {
  const { token } = useParams<{ token: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  if (!token) return null;

  const { mutate, isLoading } = useMutation(updateUserPassword, {
    onSuccess() {
      console.log('Password updated successfully');
    },
    onError: (err: ErrorInfo) => {
      console.log(err.response?.data?.message || 'An error occurred');
    },
  });

  const onSubmit = async (data: {
    newPassword: string;
    repeatNewPassword: string;
  }) => {
    const passwordData: UpdatePasswordType = {
      token: token,
      password: data.newPassword,
    };
    mutate(passwordData);
  };

  return (
    <div>
      <span>Update your password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('newPassword')}
          type="password"
          placeholder="Enter the new password"
          name="password"
        />
        <input
          type="password"
          {...register('repeatNewPassword')}
          placeholder="Repeat the new password"
          name="repeatNewPassword"
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};
