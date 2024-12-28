import { Container, Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

export const AuthWrapper = ({ children }: PropsWithChildren) => (
  <Container
    component="main"
    maxWidth="sm"
    sx={{ width: { xs: '80%', sm: '600px', md: '800px' } }}
  >
    <Paper
      elevation={10}
      sx={{
        marginTop: '9em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 40px ',
      }}
    >
      {children}
    </Paper>
  </Container>
);
