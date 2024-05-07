type RegisterValues = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

type RegisterResponse = {
  registerToken: string;
};

type ForgotPasswordResponse = {
  forgotPassword: string;
};

export type { RegisterValues, RegisterResponse, ForgotPasswordResponse };
