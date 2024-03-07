import axios from 'axios';
import { loginResponse, loginValues } from '../../modules/Login/login.types';
import {
  RegisterResponse,
  RegisterValues,
} from '../../modules/Register/register.types';
import { BASE_URLs } from '../axios.config';
import { UpdatePasswordType } from '../../modules/ResetPassword/NewPassword/UpdatePassword.types';
import { GenericResponseType } from '../../types/Shared.types';

const login = (values: loginValues) =>
  axios.post<loginResponse>(`${BASE_URLs.auth}login`, values);

const registerCall = (values: RegisterValues) =>
  axios.post<RegisterResponse>(`${BASE_URLs.auth}register/`, values);

const resetPasswordToken = (email: string) =>
  axios.post<GenericResponseType>(`${BASE_URLs.auth}reset-password`, {
    email,
  });

const resetPasswordOTP = (otp: string) =>
  axios.post<GenericResponseType>(`${BASE_URLs.auth}reset-password/otp`, {
    otp,
  });

const updateUserPassword = (values: UpdatePasswordType) =>
  axios.patch<GenericResponseType>(
    `${BASE_URLs.auth}reset-password/updatePassword`,
    values,
  );
export {
  login,
  registerCall,
  resetPasswordToken,
  resetPasswordOTP,
  updateUserPassword,
};
