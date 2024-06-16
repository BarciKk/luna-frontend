import { User } from './login.types';

export type ForgotPasswordForm = Pick<User, 'email'>;
