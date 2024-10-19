import { axiosInstance as axios } from '../axios.config';
import { User } from 'types/User.types';

export const getCurrentUser = async (userId: string) =>
  (await axios.get<User>(`user/${userId}`)).data;
