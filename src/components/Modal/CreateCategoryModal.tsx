import { DialogContent, DialogTitle } from '@mui/material';

export const CreateCategoryModal = () => {
  return (
    <>
      <DialogTitle
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          fontWeight: 'bolder',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
        }}
      >
        create category
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>dupa</DialogContent>
    </>
  );
};
