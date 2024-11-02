import { axiosInstance as axios } from '../axios.config';
import { Category } from 'types/User.types';

export const createCategory = (data: Category) =>
  axios.post('/categories', data);
