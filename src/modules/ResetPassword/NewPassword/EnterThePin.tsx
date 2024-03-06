import { Button, PinInput, Stack, Text, Title } from '@mantine/core';
import { resetPasswordOTP } from '../../../api/auth';
import { useMutation } from 'react-query';
import { FC, useState } from 'react';

export const EnterThePin: FC = () => {
  const [otp, setOtp] = useState<string>('');
  const { mutate, isLoading } = useMutation(resetPasswordOTP, {
    onSuccess() {
      alert('wow u did it looser');
    },
  });

  const onSubmit = async () => {
    mutate(otp);
  };

  return (
    <Stack align="center" gap="xs">
      <Title>Email verification</Title>
      <Text c="gray">We have sent an OTP code into your email</Text>
      <Text c="gray">*PIN IS SINGLE USE*</Text>
      <PinInput
        length={5}
        value={otp}
        onChange={(value) => setOtp(value)}
        size="xl"
        mt="lg"
        type="number"
      />

      <Button
        mt="xl"
        w="50%"
        onClick={onSubmit}
        loading={isLoading}
        type="submit"
      >
        Verify Account
      </Button>
      <Text>Didt receive the code? Resend OTP</Text>
    </Stack>
  );
};
