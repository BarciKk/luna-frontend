import { GenericResponseType } from 'types/Shared.types';
import { axiosInstance as axios } from '../axios.config';
import { Category } from 'types/User.types';

export const getAllCategories = async (userId: string) => {
  const res = await axios.post<Category[]>('/categories', { userId });
  return res.data;
};
export const getSingleCategory = async (categoryId: string) => {
  const res = await axios.get<Category>(`/categories/${categoryId}`);
  return res.data;
};
export const createCategory = async (data: Omit<Category, 'id'>) =>
  await axios.post<GenericResponseType>('/categories/create', data);

export const editCategory = async (data: Category) =>
  await axios.patch<GenericResponseType>('/categories/edit', data);

export const deleteCategory = async (categoryId: string) =>
  await axios.delete<GenericResponseType>('/categories/delete', {
    data: {
      categoryId,
    },
  });
