import { User } from 'types/User.types';

type LoginValues = Pick<User, 'username' | 'password'>;

type LoginResponse = {
  token: string;
  user: User;
};

export type { LoginValues, LoginResponse, User };
