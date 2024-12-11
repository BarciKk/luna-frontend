import { Grid } from '@mui/material';
import { BottomNavigation } from 'components/BottomNavigation/BottomNavigation.component';
import { AddActivity } from 'components/Button/AddAcitivity/AddActivity.component';
import { Header } from 'components/Header/Header.component';
import { Seo } from 'components/Seo';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <Grid container direction="column" style={{ height: '100vh' }}>
      <Seo title="LunaSync - Dashboard" description="Dashboard" />
      <Grid item sx={{ flexShrink: 0 }}>
        <Header />
      </Grid>

      <Grid item sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Outlet />
      </Grid>
      <Grid
        item
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          zIndex: 10,
        }}
      >
        <AddActivity />
      </Grid>
      <Grid item sx={{ flexShrink: 0 }}>
        <BottomNavigation />
      </Grid>
    </Grid>
  );
};
