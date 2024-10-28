export type Category = {
  id: string;
  userId: string;
  name: string;
  icon: string;
  createdAt: Date;
};

export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
  isActive: boolean;
  bio: string;
  createdAt: Date;
  categories: Category[];
};
