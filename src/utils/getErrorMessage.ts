import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

export const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
): string => {
  if (error && typeof error.message === 'string') {
    return error.message || '';
  }
  return '';
};
