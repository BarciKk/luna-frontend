import { axiosInstance as axios } from '../axios.config';

export const getCurrentUser = async (userId: string) =>
  (await axios.get(`user/${userId}`)).data.user;
