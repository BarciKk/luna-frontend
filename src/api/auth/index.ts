import { UpdatePasswordType } from 'modules/ResetPassword/ResetPassword/ResetPassword.types';

import { axiosInstance as axios } from '../axios.config';
import {
  loginValues,
  loginResponse,
} from 'modules/ResetPassword/ForgotPassword/login.types';
import { GenericResponseType } from 'types/Shared.types';
import {
  RegisterResponse,
  RegisterValues,
} from 'modules/Register/register.types';

const login = (values: loginValues) =>
  axios.post<loginResponse>('auth/login', values);

const registerCall = (values: RegisterValues) =>
  axios.post<RegisterResponse>('auth/register', values);

const forgotPassword = (email: string) =>
  axios.post<GenericResponseType>('auth/forgot-password', {
    email,
  });

const resetPassword = ({ password, token }: UpdatePasswordType) =>
  axios.post<GenericResponseType>('auth/reset-password', {
    token,
    password,
  });

export { login, registerCall, forgotPassword, resetPassword };
