import i18next from 'i18next';
import * as yup from 'yup';

const translateValidateMessage = (key: string): string => {
  return i18next.t(`validations.${key}`);
};

const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(translateValidateMessage('emailValidFormat'))
      .required(translateValidateMessage('email')),
    username: yup
      .string()
      .min(3, translateValidateMessage('minUsernameLength'))
      .required()
      .trim(),
    password: yup.string().required(translateValidateMessage('password')),
    repeatPassword: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        translateValidateMessage('passwordsAreNotEqual'),
      )
      .required(translateValidateMessage('confirmPassword'))
      .trim(),
  })
  .required();

const loginSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .min(3, translateValidateMessage('minUsernameLength'))
      .trim()
      .required(),
    password: yup
      .string()
      .required(translateValidateMessage('password'))
      .trim(),
  })
  .required();

const resetPasswordEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email(translateValidateMessage('emailValidFormat'))
    .required(translateValidateMessage('email')),
});
const updatePasswordSchema = yup.object().shape({
  newPassword: yup.string().required(translateValidateMessage('password')),
  repeatNewPassword: yup
    .string()
    .oneOf(
      [yup.ref('newPassword')],
      translateValidateMessage('passwordsAreNotEqual'),
    )
    .required(translateValidateMessage('confirmPassword'))
    .trim(),
});

export {
  registerSchema,
  loginSchema,
  resetPasswordEmailSchema,
  updatePasswordSchema,
};
