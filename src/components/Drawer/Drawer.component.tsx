import {
  Category,
  ContactEmergency,
  Home,
  PermIdentityOutlined,
  Settings,
} from '@mui/icons-material';
import {
  Typography,
  Drawer as MuiDrawer,
  Stack,
  Box,
  Divider,
} from '@mui/material';
import { Button } from 'components/Button';
import { useUser } from 'hooks';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const Drawer = ({ open, onClose }: DrawerProps) => {
  const { user, jwt, removeUser } = useUser();

  return (
    <MuiDrawer open={open} onClose={onClose} anchor="left">
      <Stack spacing={0} sx={{ width: '80vw', maxWidth: '400px' }} padding={3}>
        <Box marginBottom="2em">
          <Typography fontWeight="bolder" fontSize="18px" color="primary.main">
            LunaSync
          </Typography>
          <Typography fontSize="12px" fontWeight="bolder">
            Czwartek
          </Typography>
          <Typography marginBottom="8px" fontSize="12px">
            13 czerwca 2024
          </Typography>
        </Box>
        <Divider />
        <Stack spacing={2} marginTop="8px" marginBottom="3em">
          <Button icon={<Home />} text="Home" variant="text" alignLeft />
          <Button
            text="Categories"
            icon={<Category />}
            variant="text"
            alignLeft
          />
          <Button text="Customize" icon={<Home />} variant="text" alignLeft />
          <Divider sx={{ marginY: '8px' }} />
          <Button
            text="Get Premium"
            icon={<PermIdentityOutlined />}
            variant="text"
            alignLeft
          />
          <Button
            text="Settings"
            icon={<Settings />}
            variant="text"
            alignLeft
          />
          <Button
            text="Contact us"
            icon={<ContactEmergency />}
            variant="text"
            alignLeft
          />
          <Divider sx={{ marginY: '8px' }} />
        </Stack>
        {user && jwt && <Button onClick={() => removeUser()} text="Logout" />}
      </Stack>
    </MuiDrawer>
  );
};
