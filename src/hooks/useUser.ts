import { stat } from 'fs';
import { useNavigate } from 'react-router-dom';
import { cookieKeys } from '../enums/cookiesKeys.enums';
import { UnauthorizedRoutes } from '../enums/routes.enums';
import { useCookies } from './useCookies';
import { getCurrentUser } from 'api/user';
import { useQuery, useQueryClient } from 'react-query';
import { User } from 'types/User.types';
import { QueryKeys } from 'enums/queryKeys.enums';
import { useCallback, useEffect } from 'react';

export const useUser = () => {
  const queryClient = useQueryClient();
  const { getCookie, removeCookie, setCookie } = useCookies();
  const user: User = getCookie(cookieKeys.user);
  const jwt: string = getCookie(cookieKeys.jwt);
  const navigate = useNavigate();

  const { data, isLoading, error, status } = useQuery<User>([QueryKeys.user], {
    queryFn: () => getCurrentUser(user._id),
    retry: 0,
    enabled: !!(user && jwt),
  });

  const removeUser = useCallback(() => {
    removeCookie(cookieKeys.user);
    removeCookie(cookieKeys.jwt);
    queryClient.removeQueries({
      queryKey: [QueryKeys.user],
    });

    navigate(`${UnauthorizedRoutes.login}`);
  }, [navigate, queryClient]);

  const setUser = (user: User, token: string) => {
    setCookie(cookieKeys.user, user);
    setCookie(cookieKeys.jwt, token);
    queryClient.setQueryData([QueryKeys.user], data);
  };
  useEffect(() => {
    if (error) {
      removeUser();
    }
  }, [error, removeUser]);

  return {
    user: data,
    isLoading: status !== 'idle' && isLoading,
    setUser,
    jwt,
    removeUser,
  };
};
