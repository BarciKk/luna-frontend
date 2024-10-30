import { cookieKeys } from 'enums/CookiesKeys.enums';
import { useCallback } from 'react';
import Cookies from 'universal-cookie';

type CookieOptions = {
  maxAge: number;
  path: string;
  secure: boolean;
  sameSite: 'strict';
};

export const useCookies = () => {
  const cookies = new Cookies();

  const cookieOptions: CookieOptions = {
    maxAge: 360000,
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
    cookies.remove(key, { path: '/' });
  }, []);

  return { setCookie, getCookie, removeCookie };
};
