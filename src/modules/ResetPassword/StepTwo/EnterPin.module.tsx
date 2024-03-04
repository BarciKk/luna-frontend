import { Button, PinInput, Stack, Text, Title } from '@mantine/core';
export const EnterThePin = () => {
  return (
    <Stack align="center" gap="xs">
      <Title>Email verification</Title>
      <Text c="gray">
        We have send a OTP code into your e-mail *place for email*{' '}
      </Text>
      <PinInput length={5} size="xl" mt="lg" type="number" />

      <Button mt="xl" w="50%">
        Verify Account{' '}
      </Button>
      <Text>Didnt resived code? Resend OTP </Text>
    </Stack>
  );
};

// set some kinda delay on the resend
