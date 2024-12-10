import i18next from 'i18next';

export const translateValidateMessage = (key: string): string => {
  return i18next.t(`validations.${key}`);
};
