import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { User } from '../modules/Login/login.types';
import { cookieKeys } from '../enums/Auth/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../enums/Auth/routes.enums';

export const useUser = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const user: User = cookies.get(cookieKeys.user);

  console.log(user, 'uesr form hook');
  const removeUser = () => {
    cookies.remove(cookieKeys.user);
    cookies.remove(cookieKeys.jwt);
    navigate(`${UnauthorizedRoutes.login}`);
  };

  const setUserCookie = (userData: User) => {
    cookies.set(cookieKeys.user, userData);
  };
  return { user, removeUser, setUserCookie };
};
