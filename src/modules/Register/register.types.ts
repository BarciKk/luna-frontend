type RegisterValues = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
  terms: boolean;
};

type RegisterResponse = {
  registerToken: string;
};

export type { RegisterValues, RegisterResponse };
