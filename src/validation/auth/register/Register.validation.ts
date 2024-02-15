import * as yup from "yup";

export const registerSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    repeatPassword: yup.string().required(),
  })
  .required();
