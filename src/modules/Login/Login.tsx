import {
  Box,
  Image,
  Text,
  Stack,
  Button,
  TextInput,
  PasswordInput,
  Title,
  SimpleGrid,
  Group,
} from '@mantine/core';
import { FaLock, FaUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { HiArrowRightCircle } from 'react-icons/hi2';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import Cookies from 'universal-cookie';
import { loginValues } from './login.types';
import { login } from '../../api/auth';
import { cookieKeys } from '../../enums/Auth/cookiesKeys.enums';
import { errorColor } from '../../styles/colors';
import classes from './/Login.module.css';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomErrorMessage } from '../../components/ErrorMessage';
import { loginSchema } from '../../validation/auth';
import { useTranslation } from 'react-i18next';
import { Link } from '../../components/Link';
export const Login = () => {
  const cookies = new Cookies(null, { path: '/' });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginValues>({ resolver: yupResolver(loginSchema) });
  const { mutate, isLoading, isError } = useMutation(
    (values: loginValues) => login(values),
    {
      onSuccess: (response) => {
        const {
          data: { accessToken, user },
        } = response;

        if (accessToken && user) {
          cookies.set(cookieKeys.user, user);
          cookies.set(cookieKeys.jwt, accessToken, { maxAge: 3600 });
          navigate('/dashboard');
        }
      },

      onError: (error: Error) => {
        console.error(t('errors.incorrectLoginOrPassword') + error);
      },
    },
  );

  const onSubmit: SubmitHandler<loginValues> = async (data) => {
    try {
      mutate(data);
      reset();
    } catch (err) {
      console.error(t('errors.incorrectLoginOrPassword') + err);
    }
  };
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} p="xs" mt="lg">
      <Image
        my="auto"
        radius="sm"
        alt="guy showing activities"
        visibleFrom="md"
        src="/assets/images/activity_tracker.png"
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        mr="auto"
      />
      <Box w="100%" className={classes.box}>
        <Image
          mx="auto"
          mt="sm"
          radius="sm"
          alt="logo"
          src={null}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          maw={200}
          pb="xl"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack align="center">
            <Stack w="90%" gap="sm" ta="center">
              <TextInput
                ta="center"
                className={classes.input}
                {...register('username')}
                type="text"
                error={!!errors.username}
                placeholder={t('auth.placeholders.username')}
                leftSection={<FaUser />}
              />
              <CustomErrorMessage message={errors.username?.message} />
              <PasswordInput
                {...register('password')}
                ta="center"
                error={!!errors.password}
                className={classes.input}
                placeholder={t('auth.placeholders.password')}
                leftSection={<FaLock />}
              />
              <CustomErrorMessage message={errors.password?.message} />
              <Group ml="auto">
                <Link
                  variant="white"
                  fz="sm"
                  text={t('auth.forgotPassword')}
                  c="headingColors.1"
                  to={`${UnauthorizedRoutes.resetPassword}/Email`}
                />
              </Group>
            </Stack>
            <Text fz="sm" ta="center" c={errorColor}>
              {isError ? t('errors.incorrectLoginOrPassword') : ''}
            </Text>
            <Button
              mt="md"
              size="md"
              w="80%"
              type="submit"
              loading={isLoading}
              bg="headingColors.2"
              className={classes.button}
              disabled={isLoading}
              rightSection={
                !isLoading ? (
                  <HiArrowRightCircle
                    size="1.25em"
                    style={{ marginTop: '2px' }}
                  />
                ) : null
              }
            >
              {t('auth.login')}
            </Button>

            <Title order={6} c="darkerFontColors.1" mt="md">
              {t('auth.firstPartOfRegisterMessage')}
              <Link
                variant="white"
                fz="0.875rem"
                size="sm"
                to={UnauthorizedRoutes.register}
                style={{ color: '#ffb300' }}
                text={t('auth.register')}
              />
            </Title>
          </Stack>
        </form>
      </Box>
    </SimpleGrid>
  );
};
//! start with testing

// Test user for login
// username: Barcik
// password: aa
