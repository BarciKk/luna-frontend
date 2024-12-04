import { Dialog } from '@mui/material';
import { CreateActivityModal } from 'components/Modal';
import { CreateCategoryModal } from 'components/Modal/CreateCategoryModal';
import { CreateTaskModal } from 'components/Modal/CreateTaskModal';
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
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          minWidth: '340px',
          width: '100%',
        },
        bottom: '12em',
      }}
    >
      {variant === ModalVariant.createActivity && <CreateActivityModal />}
      {variant === ModalVariant.createCategory && <CreateCategoryModal />}
      {variant === ModalVariant.createTask && <CreateTaskModal />}
    </Dialog>
  );
};
