import { Segment } from '@mui/icons-material';
import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
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
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'primary.main' }}
            onClick={toggleOpenDrawer}
          >
            <Segment />
          </IconButton>
          <Typography>Today date</Typography>
        </Box>
        <Drawer open={openDrawer} onClose={toggleOpenDrawer} />
        {shouldRenderLoginButton ? (
          <Button
            text="Login"
            variant="text"
            onClick={() => navigate(`${UnauthorizedRoutes.login}`)}
          />
        ) : (
          <CustomAvatar src={user.avatar} label="Open settings" />
        )}
      </Toolbar>
    </AppBar>
  );
};
