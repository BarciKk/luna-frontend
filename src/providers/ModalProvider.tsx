import { ModalManager } from 'modules/Modal/ModalManager';
import {
  createContext,
  useState,
  ReactNode,
  PropsWithChildren,
  FC,
  useContext,
} from 'react';
import { ModalVariantType } from 'types/Modal.types';

interface ModalContextType {
  open: boolean;
  handleOpenModal: (variant: ModalVariantType) => void;
  handleCloseModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({
  children,
}: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const [variant, setVariant] = useState<ModalVariantType | null>(null);

  const handleOpenModal = (variant: ModalVariantType) => {
    setOpen(true);
    setVariant(variant);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setVariant(null);
  };

  return (
    <ModalContext.Provider value={{ open, handleOpenModal, handleCloseModal }}>
      {children}
      <ModalManager open={open} variant={variant} onClose={handleCloseModal} />
    </ModalContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Context must be initialized inside provider');
  }
  return context;
};
