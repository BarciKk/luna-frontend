import { Dialog } from '@mui/material';
import { CreateActivityModal } from 'components/Modal';
import { CreateCategoryModal } from 'components/Modal/CreateCategoryModal';
import { ModalVariant } from 'constants/modal.constants';
import { FC } from 'react';
import { ModalVariantType } from 'types/Modal.types';

interface ModalManagerProps {
  open: boolean;
  variant: ModalVariantType | null;
  onClose: () => void;
}

export const ModalManager: FC<ModalManagerProps> = ({
  open,
  variant,
  onClose,
}) => {
  if (!open || !variant) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      {variant === ModalVariant.createActivity && <CreateActivityModal />}
      {variant === ModalVariant.createCategory && <CreateCategoryModal />}
    </Dialog>
  );
};
