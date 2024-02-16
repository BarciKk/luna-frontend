import { useTranslation } from 'react-i18next';

export const useTranslationMessage = () => {
  const { t: translate } = useTranslation();

  const t = (key: string) => translate(key);

  return {
    t,
  };
};
