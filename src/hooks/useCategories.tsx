import { getAllCategories } from 'api/category';
import { useQuery } from 'react-query';

import { Category } from 'types/Category.types';
import { useUser } from './useUser';
import { BASE_CATEGORIES, CUSTOM_ICON_MAP } from 'constants/category.constants';
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

  const replaceIconsInCategories = (categories: Category[]) => {
    return categories.map((category) => ({
      ...category,
      icon:
        CUSTOM_ICON_MAP[category.icon as keyof typeof CUSTOM_ICON_MAP] ||
        category.icon,
    }));
  };
  const combinedCategories = [
    ...BASE_CATEGORIES,
    ...replaceIconsInCategories(CUSTOM_CATEGORIES || []),
  ];

  return {
    customCategories: replaceIconsInCategories(CUSTOM_CATEGORIES || []),
    baseCategories: BASE_CATEGORIES,
    combinedCategories,
    isLoading: isLoading,
  };
};
