type loginValues = {
  username: string;
  password: string;
};

type User = {
  id: string;
  email: string;
  username: string;
  password: string;
};

type loginResponse = {
  accessToken: string;
  user: User;
};

export type { loginValues, loginResponse, User };
