import { Segment } from '@mui/icons-material';
import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
import { CustomAvatar } from 'components/Avatar/Avatar.component';
import { Button } from 'components/Button/Button.component';
import { Drawer } from 'components/Drawer/Drawer.component';
import { currentDate } from 'constants/date.constants';
import { DEFAULT_USER_IMAGE } from 'constants/user.constants';
import { format } from 'date-fns';
import { AuthorizedRoutes, UnauthorizedRoutes } from 'enums/Routes.enums';
import { motion } from 'framer-motion';
import { useQueryString, useUser } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { getQueryString } = useQueryString();
  const dateParam = getQueryString('date');
  const navigate = useNavigate();
  const { user, jwt } = useUser();
  const formattedDate = dateParam ? new Date(dateParam) : currentDate;

  const headerDate =
    format(currentDate, 'yyyy-MM-dd') === format(formattedDate, 'yyyy-MM-dd')
      ? 'Today'
      : format(formattedDate, 'dd MMM yyyy');

  const shouldRenderLoginButton = !user && !jwt;
  const toggleOpenDrawer = () => setOpenDrawer((drawer) => !drawer);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
    >
      <AppBar sx={{ position: 'sticky' }}>
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
                color: 'primary.contrastText',
              }}
              onClick={toggleOpenDrawer}
            >
              <Segment />
            </IconButton>
            <motion.div
              key={headerDate}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
              }}
            >
              <Typography
                fontSize={18}
                color="primary.contrastText"
                fontWeight="bolder"
                onClick={() => navigate(AuthorizedRoutes.today)}
                sx={{ cursor: 'pointer' }}
              >
                {headerDate}
              </Typography>
            </motion.div>
          </Box>
          <Drawer open={openDrawer} onClose={toggleOpenDrawer} />
          {shouldRenderLoginButton ? (
            <Button
              text="Login"
              variant="text"
              onClick={() => navigate(`${UnauthorizedRoutes.login}`)}
            />
          ) : (
            <CustomAvatar
              src={user?.avatar ?? DEFAULT_USER_IMAGE}
              label="Open settings"
              showMenu
            />
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};
