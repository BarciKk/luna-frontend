type RegisterValues = {
  email: string;
  username: string;
  password: string;
  repeatPassword?: string;
};

type RegisterResponse = {
  registerToken: string;
};

export type { RegisterValues, RegisterResponse };
