import { axiosInstance as axios } from '../axios.config';
import { GenericResponseType } from 'types/Shared.types';
import { CreateTaskType, Task } from 'types/Task.types';

export const createTask = async (data: CreateTaskType) =>
  await axios.post<GenericResponseType>('/tasks/create', data);

export const getAllTasks = async (userId?: string) =>
  (await axios.post<Task[]>('/tasks/all', { userId })).data;
