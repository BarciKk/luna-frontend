import axios from "axios";
import {
  loginResponse,
  loginValues,
} from "../../modules/LoginComponent/login.component.types";

const login = (values: loginValues) =>
  axios.post<loginResponse>("http://localhost:3000/auth/login", values);

export { login };
