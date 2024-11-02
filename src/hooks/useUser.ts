import { useNavigate } from 'react-router-dom';
import { useCookies } from './useCookies';
import { getCurrentUser } from 'api/user';
import { useQuery, useQueryClient } from 'react-query';
import { User } from 'types/User.types';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { useCallback, useEffect, useState } from 'react';
import { cookieKeys } from 'enums/CookiesKeys.enums';
import { UnauthorizedRoutes } from 'enums/Routes.enums';

export const useUser = () => {
  const queryClient = useQueryClient();
  const { getCookie, removeCookie, setCookie } = useCookies();
  const [loading, setLoading] = useState(true);
  const user: User = getCookie(cookieKeys.user);
  const jwt: string = getCookie(cookieKeys.jwt);
  const navigate = useNavigate();

  const {
    data,
    isLoading: queryLoading,
    status,
    error,
  } = useQuery<User>([QueryKeys.user], {
    queryFn: () => getCurrentUser(user.id),

    retry: 0,
    enabled: !!(user && jwt),
  });
  const isLoading = loading || (status !== 'idle' && queryLoading);

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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (error) {
      removeUser();
    }
    return () => clearTimeout(timer);
  }, [error, removeUser]);
  return {
    user: data,
    isLoading,
    setUser,
    jwt,
    removeUser,
  };
};
