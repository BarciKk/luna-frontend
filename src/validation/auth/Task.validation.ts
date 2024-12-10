import { z } from 'zod';

export const createTaskSchema = z.object({
  name: z
    .string()
    .min(3, 'Task name should have at least 3 characters')
    .max(32, "Task name shouldn't be that long!")
    .trim(),
});
