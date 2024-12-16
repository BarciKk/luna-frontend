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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Box>
      <Tooltip title={(label ??= '')}>
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
          MenuListProps={{ sx: { padding: '8px' } }}
          anchorEl={anchorElement}
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
          <MenuItem onClick={handleClose}>{t('shared.profile')}</MenuItem>
          <MenuItem onClick={handleClose}>{t('shared.settings')}</MenuItem>
          <MenuItem onClick={removeUser}>{t('shared.logout')}</MenuItem>
        </Menu>
      )}
    </Box>
  );
};
