import {
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { Button } from 'components/Button';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Input } from 'components/Input';

export const CreateCategoryModal = () => {
  return (
    <Box p={2}>
      <DialogTitle
        id="create-category-dialog-title"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="22px" fontWeight="bolder">
          New category
        </Typography>
        <IconButton>
          <WidgetsIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ marginTop: '14px' }}>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <Input name="password" type="text" label="dupa" />
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button text="CREATE CATEGORY" />
      </DialogActions>
    </Box>
  );
};
