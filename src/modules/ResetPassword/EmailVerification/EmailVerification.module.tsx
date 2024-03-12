import { Input, Title, Text, Button, Stack } from '@mantine/core';

import { useMutation } from 'react-query';
import { resetPasswordToken } from '../../../api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordEmailSchema } from '../../../validation/auth/Auth.validation';
import { CustomErrorMessage } from '../../../components/ErrorMessage';
import { ErrorInfo } from '../../../types/Shared.types';

type EmailVerification = {
  email: string;
};
export const EnterTheEmail = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordEmailSchema),
  });
  const { mutate, isLoading } = useMutation(resetPasswordToken, {
    onSuccess() {
      navigate(`${UnauthorizedRoutes.resetPassword}/OTP`);
    },
    onError: (err: ErrorInfo) => {
      if (err.response) {
        setErrorMessage(`${err.response.data.error}`);
      }
    },
  });

  const onSubmit = async (data: EmailVerification) => {
    mutate(data.email);
  };

  return (
    <Stack>
      <Title c="darkerFontColors.1">Enter your email</Title>
      <Text c="lightFontColors.4" fz="md" mb="md">
        We re going to send a code verification to this email
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register('email')}
          placeholder="E-mail"
          w="60%"
          error={!!errors.email}
          mx="auto"
        />
        <CustomErrorMessage
          message={errors.email?.message || errorMessage}
          my="sm"
        />
        <Button
          w="40%"
          radius="sm"
          type="submit"
          loading={isLoading}
          mt="xl"
          size="md"
          bg="headingColors.1"
        >
          Send code
        </Button>
      </form>
    </Stack>
  );
};
