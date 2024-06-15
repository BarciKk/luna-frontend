import { BottomNavigation } from 'components/BottomNavigation/BottomNavigation.component';

import { Header } from 'components/Header/Header.component';
import { Seo } from 'components/Seo';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <Seo title="LunaSync - Dashboard" description="auth forgot password" />
      <Header />
      <Outlet />
      <BottomNavigation />
    </>
  );
};
