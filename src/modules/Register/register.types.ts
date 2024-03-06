type RegisterValues = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

type RegisterResponse = {
  registerToken: string;
};
type ErrorInfo = {
  response?: {
    data: {
      message: string;
      error: string;
    };
  };
};
export type { RegisterValues, RegisterResponse, ErrorInfo };
