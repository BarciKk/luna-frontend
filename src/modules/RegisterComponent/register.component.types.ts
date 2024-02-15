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
      error: string;
    };
  };
};
export type { RegisterValues, RegisterResponse, ErrorInfo };
