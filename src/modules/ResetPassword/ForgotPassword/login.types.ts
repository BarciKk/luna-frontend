import { User } from 'types/User.types';

type LoginValues = Pick<User, 'email' | 'password'>;

type LoginResponse = {
  jwt: string;
  user: User;
};

export type { LoginValues, LoginResponse, User };
