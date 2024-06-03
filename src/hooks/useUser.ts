import { useNavigate } from 'react-router-dom';
import { User } from '../modules/Login/login.types';
import { cookieKeys } from '../enums/Auth/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../enums/Auth/routes.enums';
import { useCookies } from './useCookies';

export const useUser = () => {
  const { getCookie, removeCookie } = useCookies();
  const navigate = useNavigate();
  const user: User = getCookie(cookieKeys.user);
  const jwt: string = getCookie(cookieKeys.jwt);

  const removeUser = () => {
    removeCookie(cookieKeys.user);
    removeCookie(cookieKeys.jwt);
    navigate(`${UnauthorizedRoutes.login}`);
  };

  return { user, jwt, removeUser };
};

//that one must be rebuilded cuz currnelty that have a lot of problems
//u should declare cookie details/options
