import { ModalContext } from 'providers/ModalProvider';
import { useContext } from 'react';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Context must be initialized inside provider');
  }
  return context;
};
