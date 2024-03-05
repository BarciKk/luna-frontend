import { Box, Input, Title, Text, Button } from '@mantine/core';

import { useMutation } from 'react-query';
import { resetPasswordToken } from '../../../api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';

export const EnterTheEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const { mutate, isLoading } = useMutation(
    (email: string) => resetPasswordToken(email),
    {
      onSuccess() {
        navigate(`${UnauthorizedRoutes.resetPassword}/step2`);
      },
    },
  );

  const handleSubmit = () => {
    mutate(email);
  };

  return (
    <Box>
      <Title>Enter your email </Title>
      <Text c="gray">We gonna send to this email code verification</Text>

      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        w="60%"
        mx="auto"
        mt="lg"
      />
      <Button w="60%" mt="xl" onClick={handleSubmit} loading={isLoading}>
        Send code{' '}
      </Button>
    </Box>
  );
};

//we have to check if account exist in the db if yes we are sending the OTP code into the email
//
