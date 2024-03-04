import { Box, Input, Title, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';

export const EnterTheEmail = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`${UnauthorizedRoutes.resetPassword}/step2`);
  };

  return (
    <Box>
      <Title>Enter your email </Title>
      <Text c="gray">We gonna send to this email code verification</Text>

      <Input type="email" placeholder="E-mail" w="60%" mx="auto" mt="lg" />
      <Button w="60%" mt="xl" onClick={handleSubmit}>
        Send code{' '}
      </Button>
    </Box>
  );
};

//we have to check if account exist in the db if yes we are sending the OTP code into the email
//
