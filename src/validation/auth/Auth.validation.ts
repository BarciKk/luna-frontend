import * as yup from "yup";

const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email format. Please enter a valid email address.")
      .required("Email is required"),
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters")
      .required()
      .trim(),
    password: yup.string().required("Password is required"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password are not the same ")
      .required("You must confirm your password ")
      .trim(),
  })
  .required();

const loginSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters")
      .trim()
      .required(),
    password: yup.string().required("Password is required").trim(),
  })
  .required();

export { registerSchema, loginSchema };
