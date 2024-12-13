import { useState, MouseEvent } from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import { useUser } from 'hooks';

type CustomAvatarProps = AvatarProps & {
  src: string;
  label?: string;
  showMenu?: boolean;
};

export const CustomAvatar = ({
  src,
  label,
  showMenu = false,
  ...props
}: CustomAvatarProps) => {
  const { removeUser } = useUser();

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Box>
      <Tooltip title={label || ''}>
        <IconButton data-testid="menu-click" onClick={handleClick}>
          <MuiAvatar
            {...props}
            alt="user avatar"
            src={src}
            sx={{ width: '60px', height: '60px' }}
          />
        </IconButton>
      </Tooltip>
      {showMenu && (
        <Menu
          data-testid="avatar-menu"
          MenuListProps={{ sx: { padding: '12px' } }}
          anchorEl={anchorElement}
          color="background"
          sx={{ color: 'red' }}
          open={Boolean(anchorElement)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={removeUser}>Logout</MenuItem>
        </Menu>
      )}
    </Box>
  );
};
// update menu items into navigation to user page my account should show user details/ profile should show profile with some stats
