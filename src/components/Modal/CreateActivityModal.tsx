import { DialogContent, DialogTitle } from '@mui/material';

export const CreateActivityModal = () => {
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
        create activity
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>dupa</DialogContent>
    </>
  );
};
