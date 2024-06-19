import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'components/Link';
import { Seo } from 'components/Seo';

export const TermsAndConditions = () => (
  <>
    <Seo title="Terms&Conditions" description="Terms&Conditions" />
    <Grid
      container
      justifyContent="center"
      style={{ padding: '20px', marginTop: '6em' }}
    >
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography>
            <strong>Terms and Conditions</strong>
            <br />
            <br />
            <strong>1. Account Information</strong>
            <br />
            1.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed ut est ac ipsum congue volutpat.
            <br />
            <br />
            <strong>2. Intellectual Property</strong>
            <br />
            2.1 Ut convallis ante in est fermentum, vitae interdum risus
            lobortis. Nunc varius justo et lectus varius, vitae pretium turpis
            condimentum.
            <br />
            <br />
            <strong>3. Links To Other Sites</strong>
            <br />
            3.1 Fusce consequat est vitae ligula consequat, ut luctus leo
            tempor. Cras vel tortor eu tellus commodo scelerisque.
            <br />
            <br />
            <strong>4. Termination</strong>
            <br />
            4.1 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; In hac habitasse platea dictumst.
            <br />
            <br />
            <strong>5. Governing Law</strong>
            <br />
            5.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor purus ac est posuere, et gravida arcu consectetur.
            <br />
            <br />
            <strong>6. Changes</strong>
            <br />
            6.1 Phasellus eu tortor in nunc finibus tempor nec sit amet nulla.
            Ut at mauris a purus ullamcorper tempor eget vitae dolor.
            <br />
            <br />
            <strong>7. Contact Us</strong>
            <br />
            7.1 For any questions regarding these Terms, please contact us at:
            <br />
            - Email: contact@example.com
            <br />- Address: 123 Lorem Ipsum Street, Ipsum City
          </Typography>
          <Typography textAlign="end" marginTop={3}>
            <Link to="/" text="Back" />
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </>
);
