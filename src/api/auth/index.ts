import axios from "axios";
import {
  loginResponse,
  loginValues,
} from "../../modules/LoginComponent/login.component.types";
import {
  RegisterResponse,
  RegisterValues,
} from "../../modules/RegisterComponent/register.component.types";
import { BASE_URLs } from "../axios.config";

const login = (values: loginValues) =>
  axios.post<loginResponse>(`${BASE_URLs.auth}login`, values);

const register = (values: RegisterValues) =>
  axios.post<RegisterResponse>(`${BASE_URLs.auth}register/`, values);

export { login, register };
