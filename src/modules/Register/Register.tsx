import { Link } from 'react-router-dom';
import { registerCall } from '../../api/auth';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { useForm } from 'react-hook-form';
import { RegisterValues } from './register.types';
import { useMutation } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomErrorMessage } from '../../components/ErrorMessage';
import { useState } from 'react';
import { registerSchema } from '../../validation/auth';
import { useTranslationMessage } from '../../hooks';
import { ErrorInfo } from '../../types/Shared.types';
export const Register = () => {
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
    <div>
      <img alt="logo" src={''} />
      <text>{t('auth.registerMotivationMessage')}</text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div onClick={() => setMessage(null)}>
          <text {...register('email')} name="email" />
          <CustomErrorMessage message={errors.email?.message} />
          <text {...register('username')} name="username" />
          <CustomErrorMessage message={errors.username?.message} />
          <input
            {...register('password')}
            placeholder={t('auth.placeholders.password')}
            name="password"
            type="password"
          />
          <CustomErrorMessage message={errors.password?.message} />
          <input
            {...register('repeatPassword')}
            placeholder={t('auth.placeholders.repeatPassword')}
            type="password"
            name="repeatPassword"
          />
          <CustomErrorMessage message={errors.repeatPassword?.message} />
          <text>
            {t('auth.firstPartOfTermsMessage')}
            <Link
              to={UnauthorizedRoutes.termsAndConditions}
              style={{ color: '#ffb300' }}
            >
              {t('auth.terms')}
            </Link>
          </text>
          <CustomErrorMessage message={message} />
          <div>
            <Link
              to={UnauthorizedRoutes.login}
              style={{
                color: 'darkerFontColors.1',
              }}
            >
              <text>{t('auth.loginRedirectMessage')}</text>
            </Link>
            <button onClick={handleSubmit(onSubmit)}>{t('auth.signUn')}</button>
          </div>
        </div>
      </form>
    </div>
  );
};
