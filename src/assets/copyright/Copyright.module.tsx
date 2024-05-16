import { Typography } from '@mui/material';

export const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center" mt={4}>
    {'Copyright © LunaSync '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
