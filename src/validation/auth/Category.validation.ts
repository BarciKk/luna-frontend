import { z } from 'zod';

const validate = {
  name: z
    .string()
    .min(3, 'Category name should have at least 3 characters')
    .max(32, "Category name shouldn't be that long!"),
  color: z.string(),
};

export const createCategorySchema = z.object({
  name: validate.name,
  color: validate.color,
});
