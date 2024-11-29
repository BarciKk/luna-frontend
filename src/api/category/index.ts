import { GenericResponseType } from 'types/Shared.types';
import { axiosInstance as axios } from '../axios.config';
import { Category } from 'types/User.types';

export const getAllCategories = (userId: string) => {
  return axios
    .post<Category[]>('/categories', { userId })
    .then((res) => res.data);
};
export const getSingleCategory = async (categoryId: string) => {
  const res = await axios.get<Category>(`/categories/${categoryId}`);
  return res.data;
};
export const createCategory = async (data: Category) =>
  await axios.post<GenericResponseType>('/categories/create', data);

export const deleteCategory = async (categoryId: string) =>
  await axios.delete<GenericResponseType>('/categories/delete', {
    data: {
      categoryId,
    },
  });
