import { Box, Input, Title, Text, Button } from '@mantine/core';

import { useMutation } from 'react-query';
import { resetPasswordToken } from '../../../api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordEmailSchema } from '../../../validation/auth/Auth.validation';
import { CustomErrorMessage } from '../../../components/ErrorMessage';
import { ErrorInfo } from '../../Register/register.types';

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
    <Box>
      <Title>Enter your email</Title>
      <Text c="gray">
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
          mt="lg"
          mb="sm"
        />
        <CustomErrorMessage message={errors.email?.message || errorMessage} />
        <Button w="60%" mt="xl" type="submit" loading={isLoading}>
          Send code
        </Button>
      </form>
    </Box>
  );
};
