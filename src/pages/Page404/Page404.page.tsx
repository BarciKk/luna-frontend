import { useTranslation } from 'react-i18next';
import { Typography, Grid, Button } from '@mui/material';
import { Seo } from 'components/Seo';
import { Link } from 'react-router-dom';
import { UnauthorizedRoutes } from 'enums/Auth/routes.enums';

export const Page404 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo title={'Something went wrong !'} description={'page 404'} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '70vh' }}
        color="#414c50"
      >
        <Grid item textAlign="center">
          <Typography fontSize="11em">404</Typography>
          <Typography marginBottom="2em" fontSize="20px">
            We could not find the page u are looking for.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={UnauthorizedRoutes.login}
          >
            Back to homepage
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
//translations
