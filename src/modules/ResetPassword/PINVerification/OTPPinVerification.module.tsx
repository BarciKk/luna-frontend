import { Button, PinInput, Stack, Text, Title } from '@mantine/core';
import { resetPasswordOTP } from '../../../api/auth';
import { useMutation } from 'react-query';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../../enums/Auth/routes.enums';
import { CustomErrorMessage } from '../../../components/ErrorMessage';
import { ErrorInfo } from '../../../types/Shared.types';

export const EnterThePin: FC = () => {
  const [otp, setOtp] = useState<string>('');
  const isOTPEmpty = otp.trim() !== '';
  const [errorMessage, setErrorMessage] = useState('');

  const isError = errorMessage !== '';
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(resetPasswordOTP, {
    onSuccess() {
      navigate(`${UnauthorizedRoutes.resetPassword}/NewPassword`);
    },
    onError(error: ErrorInfo) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || 'An unexpected error occurred.',
        );
      }
    },
  });

  const onSubmit = async () => {
    if (isOTPEmpty) mutate(otp);
  };

  console.log(errorMessage);
  return (
    <Stack align="center" gap="xs">
      <Title c="darkerFontColors.1">Email verification</Title>
      <Text c="lightFontColors.4">
        We have sent an OTP code into your email
      </Text>
      <PinInput
        length={5}
        value={otp}
        onChange={(value) => setOtp(value)}
        size="xl"
        mt="lg"
        error={isError}
        type="number"
      />
      <CustomErrorMessage message={errorMessage} my="sm" />
      <Button
        mt="xs"
        size="md"
        bg={!isOTPEmpty ? 'lightFontColors.0' : 'headingColors.1'}
        w="40%"
        disabled={!isOTPEmpty}
        onClick={onSubmit}
        loading={isLoading}
        type="submit"
      >
        Verify Account
      </Button>
      <Text c="darkerFontColors.1" mt="xs">
        Didnt receive the code? Resend OTP
      </Text>
    </Stack>
  );
};
