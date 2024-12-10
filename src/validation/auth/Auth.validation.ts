import { translateValidateMessage } from 'utils/translation/translateValidateMessage';
import { z } from 'zod';

const emailSchema = z
  .string()
  .email({ message: translateValidateMessage('emailValidFormat') })
  .min(3, { message: translateValidateMessage('minEmailLength') })
  .max(64, { message: translateValidateMessage('maxEmailLength') })
  .trim();

const usernameSchema = z
  .string()
  .min(4, { message: translateValidateMessage('minUsernameLength') })
  .max(32, { message: translateValidateMessage('maxUsernameLength') })
  .trim();

const passwordSchema = z
  .string()
  .min(8, { message: translateValidateMessage('minPasswordLength') });

const repeatPasswordSchema = z.string().refine((value) => value.length >= 8, {
  message: translateValidateMessage('confirmPassword'),
});

const termsSchema = z.literal(true, {
  errorMap: () => ({
    message: 'Terms & conditions are required',
  }),
});

const registerSchema = z
  .object({
    email: emailSchema,
    username: usernameSchema,
    password: passwordSchema,
    repeatPassword: repeatPasswordSchema,
    terms: termsSchema,
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const resetPasswordEmailSchema = z.object({
  email: emailSchema,
});

const updatePasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: repeatPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match!',
    path: ['confirmPassword'],
  });

export {
  registerSchema,
  loginSchema,
  resetPasswordEmailSchema,
  updatePasswordSchema,
};
