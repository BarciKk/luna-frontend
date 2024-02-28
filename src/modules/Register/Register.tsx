import {
  Button,
  Image,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { FaLock, FaUser } from 'react-icons/fa6';
import { MdAlternateEmail, MdRepeat } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './Register.module.css';
import { registerCall } from '../../api/auth';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { useForm } from 'react-hook-form';
import { ErrorInfo, RegisterValues } from './register.types';
import { useMutation } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMediaQuery } from '@mantine/hooks';
import { CustomErrorMessage } from '../../components/ErrorMessage';
import { useState } from 'react';
import { fontColors } from '../../styles/colors';
import { registerSchema } from '../../validation/auth';
import { useTranslationMessage } from '../../hooks';
export const Register = () => {
  const matches = useMediaQuery('(max-width: 520px)');
  const [message, setMessage] = useState<string | null>(null);
  const { t } = useTranslationMessage();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(registerSchema),
    criteriaMode: 'all',
  });

  const { mutate, isLoading } = useMutation(
    (values: RegisterValues) => registerCall(values),
    {
      onSuccess: () => {
        setMessage(t('auth.registerMessage'));
        reset();
      },

      onError: (err: ErrorInfo) => {
        if (err.response) {
          setMessage(`${err.response.data.error}`);
        }
      },
    },
  );
  const onSubmit = async (data: RegisterValues) => {
    try {
      mutate(data);
      reset();
    } catch {
      throw new Error('Register failed');
    }
  };

  return (
    <Stack align="center" h="100%" gap={0}>
      <Image
        mt="xs"
        radius="sm"
        alt="logo"
        style={{
          display: matches && !!errors.email ? 'none' : 'block',
        }}
        src={null}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        maw={200}
      />
      <Text w="60%" c="fontColors.1" fz="md" ta="center" lineClamp={3} m="sm">
        {t('auth.registerMotivationMessage')}
      </Text>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap="sm"
          className={classes.stack}
          ta="center"
          mt="xs"
          onClick={() => setMessage(null)}
        >
          <TextInput
            {...register('email')}
            name="email"
            className={classes.input}
            placeholder={t('auth.placeholders.email')}
            error={!!errors.email}
            leftSection={<MdAlternateEmail size="1.25em" />}
          />
          <CustomErrorMessage message={errors.email?.message} />
          <TextInput
            {...register('username')}
            placeholder={t('auth.placeholders.username')}
            name="username"
            error={!!errors.username}
            className={classes.input}
            leftSection={<FaUser />}
          />
          <CustomErrorMessage message={errors.username?.message} />
          <PasswordInput
            {...register('password')}
            placeholder={t('auth.placeholders.password')}
            name="password"
            error={!!errors.password}
            className={classes.input}
            leftSection={<FaLock />}
          />
          <CustomErrorMessage message={errors.password?.message} />
          <PasswordInput
            {...register('repeatPassword')}
            placeholder={t('auth.placeholders.repeatPassword')}
            className={classes.input}
            error={!!errors.repeatPassword}
            name="repeatPassword"
            leftSection={<MdRepeat size="1.25em" />}
          />
          <CustomErrorMessage message={errors.repeatPassword?.message} />
          <Text ta="center" fz="sm" mt="sm" c="fontColors.1">
            {t('auth.firstPartOfTermsMessage')}
            <Link
              to={UnauthorizedRoutes.termsAndConditions}
              style={{ color: '#efa700' }}
            >
              {t('auth.terms')}
            </Link>
          </Text>
          <CustomErrorMessage message={message} c={fontColors[0]} fz={14} />
          <SimpleGrid
            mt="sm"
            cols={{ base: 1, xs: 2 }}
            spacing="none"
            className={classes.simpleGrid}
          >
            <Link
              to={UnauthorizedRoutes.login}
              style={{
                color: '#1f1f1f',
              }}
            >
              <Text
                w="fit-content"
                mt="xs"
                ml="lg"
                fz="sm"
                className={classes.text}
                lineClamp={1}
              >
                {t('auth.loginRedirectMessage')}
              </Text>
            </Link>
            <Button
              size="md"
              disabled={isLoading}
              mb="sm"
              ml="auto"
              w="70%"
              bg="headingColors.2"
              onClick={handleSubmit(onSubmit)}
              className={classes.button}
            >
              {t('auth.signUn')}
            </Button>
          </SimpleGrid>
        </Stack>
      </form>
    </Stack>
  );
};
