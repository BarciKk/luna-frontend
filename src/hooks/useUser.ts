import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { User } from '../modules/Login/login.types';
import { cookieKeys } from '../enums/Auth/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../enums/Auth/routes.enums';

export const useUser = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const user: User = cookies.get(cookieKeys.user);

  const removeUser = () => {
    cookies.remove(cookieKeys.user);
    cookies.remove(cookieKeys.jwt);
    navigate(`${UnauthorizedRoutes.login}`);
  };

  const setUserCookie = (user: User) => {
    cookies.set(cookieKeys.user, user);
  };
  return { user, removeUser, setUserCookie };
};

//that one must be rebuilded cuz currnelty that have a lot of problems
//u should declare cookie details/options
