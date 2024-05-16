import { Box, Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export const AuthWrapper = ({ children }: PropsWithChildren) => (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: '8em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {children}
    </Box>
  </Container>
);
