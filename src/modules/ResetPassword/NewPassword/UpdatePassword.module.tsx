import { Button, PasswordInput, Stack, Title } from '@mantine/core';
import { useMutation } from 'react-query';
import { updateUserPassword } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePasswordSchema } from '../../../validation/auth/Auth.validation';
import { useState } from 'react';
import { ErrorInfo } from '../../../types/Shared.types';
import { CustomErrorMessage } from '../../../components/ErrorMessage';
import { UpdatePasswordType } from './UpdatePassword.types';
import { successColor } from '../../../styles/colors';

export const EnterNewPassword = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const { mutate, isLoading } = useMutation(updateUserPassword, {
    onSuccess() {
      setErrorMessage('Password updated successfully!');
    },
    onError: (err: ErrorInfo) => {
      if (err.response) {
        console.log(err.response.data.message);
        setErrorMessage(`${err.response.data.message}`);
      }
    },
  });

  const onSubmit = async (data: UpdatePasswordType) => {
    setErrorMessage('');
    setSuccessMessage(null);
    mutate(data);
  };
  return (
    <Stack>
      <Title c="darkerFontColors.1" order={1}>
        Update your password
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack align="stretch" gap="sm" mt="sm">
          <PasswordInput
            mx="auto"
            {...register('newPassword')}
            error={!!errors.newPassword}
            type="password"
            w="60%"
            placeholder="Enter the new password"
          />
          <CustomErrorMessage message={errors.newPassword?.message} />
          <PasswordInput
            type="password"
            mx="auto"
            error={!!errors.repeatNewPassword}
            {...register('repeatNewPassword')}
            w="60%"
            placeholder="Repeat the new password"
          />
          <CustomErrorMessage
            message={errors.repeatNewPassword?.message || errorMessage}
          />
          {successMessage ? (
            <CustomErrorMessage message={successMessage} c={successColor} />
          ) : null}
          <Button
            mt="md"
            w="40%"
            size="md"
            bg="headingColors.1"
            mx="auto"
            type="submit"
            loading={isLoading}
          >
            Update password
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

//figure out why the FFFFFFFFFFFFFFFFFf success message is red? XD
