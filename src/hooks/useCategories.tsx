import { getAllCategories } from 'api/category';
import { useQuery } from 'react-query';

import { useUser } from './useUser';
import { BASE_CATEGORIES } from 'constants/category.constants';
import { QueryKeys } from 'enums/QueryKeys.enums';

export const useCategories = () => {
  const { user } = useUser();
  const { data: CUSTOM_CATEGORIES, isLoading } = useQuery(
    [QueryKeys.category, user?.id],
    () => getAllCategories(user?.id),
    {
      staleTime: 30000,
      enabled: !!user,
    },
  );

  return {
    customCategories: CUSTOM_CATEGORIES,
    baseCategories: BASE_CATEGORIES,
    combinedCategories: [...(CUSTOM_CATEGORIES ?? []), ...BASE_CATEGORIES],
    isLoading: isLoading,
  };
};
