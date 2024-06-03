import { Container, Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

export const AuthWrapper = ({ children }: PropsWithChildren) => (
  <Container component="main" maxWidth="sm">
    <Paper
      elevation={10}
      sx={{
        marginTop: '6em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 40px 32px 40px',
      }}
    >
      {children}
    </Paper>
  </Container>
);
