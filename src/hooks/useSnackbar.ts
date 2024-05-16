import { useCallback, useState } from 'react';

type SnackbarOptions = {
  message: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
  duration?: number;
};

type SnackbarState = {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
};

export const useSnackbar = () => {
  const [snackbarStatus, setSnackbarStatus] = useState<SnackbarState>({
    message: '',
    open: false,
    severity: 'info',
  });

  const showSnackbar = useCallback(
    ({ message, severity = 'info', duration = 3000 }: SnackbarOptions) => {
      setSnackbarStatus({ open: true, message, severity });
      setTimeout(() => {
        setSnackbarStatus((prevState) => ({ ...prevState, open: false }));
      }, duration);
    },
    [],
  );

  const onClose = useCallback(() => {
    setSnackbarStatus((prevState) => ({ ...prevState, open: false }));
  }, []);

  return {
    showSnackbar,
    snackbarProps: {
      ...snackbarStatus,
      onClose,
    },
  };
};
