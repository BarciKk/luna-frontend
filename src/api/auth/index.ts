import { UpdatePasswordType } from '../../modules/ResetPassword/UpdatePassword/UpdatePassword.types';
import axios from 'axios';
import { loginResponse, loginValues } from '../../modules/Login/login.types';
import {
  ForgotPasswordResponse,
  RegisterResponse,
  RegisterValues,
} from '../../modules/Register/register.types';
import { BASE_URLs } from '../axios.config';
import { GenericResponseType } from '../../types/Shared.types';

const login = (values: loginValues) =>
  axios.post<loginResponse>(`${BASE_URLs.auth}login`, values);

const registerCall = (values: RegisterValues) =>
  axios.post<RegisterResponse>(`${BASE_URLs.auth}register/`, values);

const forgotPasswordToken = (email: string) =>
  axios.post<ForgotPasswordResponse>(`${BASE_URLs.auth}forgot-password`, {
    email,
  });

const updateUserPassword = ({ password, token }: UpdatePasswordType) =>
  axios.post<GenericResponseType>(`${BASE_URLs.auth}reset-password/${token}`, {
    token,
    password,
  });

export { login, registerCall, forgotPasswordToken, updateUserPassword };
