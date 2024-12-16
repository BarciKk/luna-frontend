import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(3, 'Category name should have at least 3 characters')
    .max(32, "Category name shouldn't be that long!")
    .trim(),
  color: z.string().nullable(),
});
