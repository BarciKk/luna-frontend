import { randomUUID } from 'crypto';
import { User } from 'types/User.types';

export const TEST_USER: User = {
  id: randomUUID(),
  email: 'testUser321@gmail.com',
  username: 'testUser',
  password: '**********',
  avatar: 'https://imgur.com/uhaRENv',
  isActive: true,
  bio: '',
  createdAt: new Date(),
  categories: [],
  tasks: [],
};
export const TEST_AVATAR = {
  label: 'Test Label',
};
