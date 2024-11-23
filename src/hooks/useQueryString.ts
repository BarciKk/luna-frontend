import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export type QueryStringName = 'date' | 'activity' | 'id';

export const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const createQueryString = useCallback(
    (name: QueryStringName, value: string | null) => {
      const params = new URLSearchParams(searchParams);
      if (value !== null) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      setSearchParams(params);
      return params.toString();
    },
    [searchParams, setSearchParams],
  );

  const getQueryString = useCallback(
    (name: QueryStringName) => {
      const params = new URLSearchParams(searchParams);
      return params.get(name) ?? '';
    },
    [searchParams],
  );
  const checkQueryString = useCallback(
    (name: QueryStringName) => {
      const params = new URLSearchParams(searchParams);
      return params.has(name);
    },
    [searchParams],
  );

  const removeQueryString = useCallback(
    (name: QueryStringName) => {
      if (checkQueryString(name)) {
        const params = new URLSearchParams(searchParams);
        params.delete(name);
        setSearchParams(params);
      }
    },
    [checkQueryString, searchParams, setSearchParams],
  );

  return {
    createQueryString,
    getQueryString,
    removeQueryString,
    checkQueryString,
  };
};
