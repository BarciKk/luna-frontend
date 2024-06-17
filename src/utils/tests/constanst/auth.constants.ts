import { randomUUID } from 'crypto';
import { User } from 'types/user.types';

export const TEST_USER: User = {
  id: randomUUID(),
  email: 'testUser321@gmail.com',
  username: 'testUser',
  password: '**********',
  avatar: 'https://imgur.com/uhaRENv',
  isActive: true,
  bio: '',
  createdAt: new Date(),
};
