import { User } from '../../types/user.types';

type loginValues = Pick<User, 'username' | 'password'>;

type loginResponse = {
  jwt: string;
  user: User;
};

export type { loginValues, loginResponse, User };
