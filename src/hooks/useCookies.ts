import { useCallback } from 'react';
import Cookies from 'universal-cookie';
import { cookieKeys } from '../enums/cookiesKeys.enums';

type CookieOptions = {
  maxAge: number;
  path: string;
  secure: boolean;
  sameSite: 'strict';
};

export const useCookies = () => {
  const cookies = new Cookies();

  const cookieOptions: CookieOptions = {
    maxAge: 3600,
    path: '/',
    secure: true,
    sameSite: 'strict' as const,
  };

  const setCookie = useCallback((key: cookieKeys, value: unknown) => {
    cookies.set(key, value, cookieOptions);
  }, []);

  const getCookie = useCallback((key: cookieKeys) => {
    return cookies.get(key);
  }, []);

  const removeCookie = useCallback((key: cookieKeys) => {
    cookies.remove(key);
  }, []);

  return { setCookie, getCookie, removeCookie };
};
