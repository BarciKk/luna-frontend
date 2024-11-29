import { axiosInstance as axios } from '../axios.config';

export const getCurrentUser = async (userId: string) =>
  (await axios.get(`users/${userId}`)).data.user;
