import { GenericResponseType } from 'types/Shared.types';
import { axiosInstance as axios } from '../axios.config';
import { Category } from 'types/User.types';

export const createCategory = (data: Category) =>
  axios.post<GenericResponseType>('/categories', data);
