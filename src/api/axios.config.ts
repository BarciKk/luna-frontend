import axios from 'axios';
import Cookies from 'universal-cookie';
import { cookieKeys } from 'enums/CookiesKeys.enums';

const baseURL = 'http://localhost:8080/';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = new Cookies().get(cookieKeys.jwt);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { axiosInstance };
