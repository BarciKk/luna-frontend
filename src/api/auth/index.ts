import axios from "axios";
import { loginResponse, loginValues } from "../../modules/LoginComponent/types";

const login = (value: loginValues) =>
  axios.post<loginResponse>('http://localhost:3000/auth/login/"', value);

export { login };
