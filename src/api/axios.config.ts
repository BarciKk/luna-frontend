import axios from 'axios';
import Cookies from 'universal-cookie';

import { baseURL } from '../config';
import { cookieKeys } from 'enums/cookiesKeys.enums';

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
