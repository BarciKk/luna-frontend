import { axiosInstance as axios } from '../axios.config';
import { GenericResponseType } from 'types/Shared.types';
import { CreateTaskType } from 'types/Task.types';

export const createTask = async (data: CreateTaskType) =>
  await axios.post<GenericResponseType>('/tasks/create', data);
