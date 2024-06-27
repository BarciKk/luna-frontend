import { Grid } from '@mui/material';
import { BottomNavigation } from 'components/BottomNavigation/BottomNavigation.component';
import { AddActivity } from 'components/Button/AddContent/AddActivity.component';
import { Header } from 'components/Header/Header.component';
import { Seo } from 'components/Seo';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <Grid container direction="column" style={{ height: '100vh' }}>
      <Seo title="LunaSync - Dashboard" description="auth forgot password" />
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs>
        <Outlet />
      </Grid>
      <Grid item sx={{ margin: '0px 12px 12px auto' }}>
        <AddActivity />
      </Grid>
      <Grid item>
        <BottomNavigation />
      </Grid>
    </Grid>
  );
};
