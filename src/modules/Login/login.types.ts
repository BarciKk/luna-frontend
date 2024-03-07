type loginValues = {
  username: string;
  password: string;
};

type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
  isActive: boolean;
  bio: string;
  createdAt: Date;
};

//user shouldn't be here but leave for now
type loginResponse = {
  accessToken: string;
  user: User;
};

export type { loginValues, loginResponse, User };
