import { Segment } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { CustomAvatar } from 'components/Avatar/Avatar.component';
import { Button } from 'components/Button/Button.component';
import { Drawer } from 'components/Drawer/Drawer.component';
import { UnauthorizedRoutes } from 'enums/Auth/routes.enums';
import { useUser } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const { user, jwt } = useUser();
  const theme = useTheme();

  const shouldRenderLoginButton = !user && !jwt;

  const toggleOpenDrawer = () => setOpenDrawer((drawer) => !drawer);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2,
              color: theme.palette.mode === 'dark' ? 'primary.main' : 'white',
            }}
            onClick={toggleOpenDrawer}
          >
            <Segment />
          </IconButton>
          <Typography color="">Today</Typography>
        </Box>
        <Drawer open={openDrawer} onClose={toggleOpenDrawer} />
        {shouldRenderLoginButton ? (
          <Button
            text="Login"
            variant="text"
            onClick={() => navigate(`${UnauthorizedRoutes.login}`)}
          />
        ) : (
          <CustomAvatar src={user.avatar} label="Open settings" showMenu />
        )}
      </Toolbar>
    </AppBar>
  );
};
