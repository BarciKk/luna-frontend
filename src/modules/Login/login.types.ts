import { User } from '../../types/user.types';

type loginValues = {
  username: string;
  password: string;
};

type loginResponse = {
  jwt: string;
  user: User;
};

export type { loginValues, loginResponse, User };
