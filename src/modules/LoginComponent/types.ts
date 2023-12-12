type loginValues = {
  email: string;
  password: string;
};

type loginResponse = {
  jwt: string;
};

export type { loginValues, loginResponse };
