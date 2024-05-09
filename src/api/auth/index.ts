import { UpdatePasswordType } from '../../modules/ResetPassword/UpdatePassword/ResetPassword.types';
import axios from 'axios';
import { loginResponse, loginValues } from '../../modules/Login/login.types';
import {
  ForgotPasswordResponse,
  RegisterResponse,
  RegisterValues,
} from '../../modules/Register/register.types';
import { BASE_URL } from '../axios.config';
import { GenericResponseType } from '../../types/Shared.types';

const login = (values: loginValues) =>
  axios.post<loginResponse>(`${BASE_URL.auth}login`, values);

const registerCall = (values: RegisterValues) =>
  axios.post<RegisterResponse>(`${BASE_URL.auth}register/`, values);

const forgotPasswordToken = (email: string) =>
  axios.post<ForgotPasswordResponse>(`${BASE_URL.auth}forgot-password`, {
    email,
  });

const resetPassword = ({ password, token }: UpdatePasswordType) =>
  axios.post<GenericResponseType>(`${BASE_URL.auth}reset-password`, {
    token,
    password,
  });

export { login, registerCall, forgotPasswordToken, resetPassword };
