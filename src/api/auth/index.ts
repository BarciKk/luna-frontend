import { UpdatePasswordType } from 'modules/ResetPassword/ResetPassword/ResetPassword.types';

import { axiosInstance as axios } from '../axios.config';
import {
  LoginValues,
  LoginResponse,
} from 'modules/ResetPassword/ForgotPassword/login.types';
import { GenericResponseType } from 'types/Shared.types';
import {
  RegisterResponse,
  RegisterValues,
} from 'modules/Register/register.types';

const login = (values: LoginValues) =>
  axios.post<LoginResponse>('auth/login', values);

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
