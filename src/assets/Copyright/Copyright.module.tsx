import { Typography } from '@mui/material';

export const Copyright = () => (
  <Typography color="text.primary" fontSize="14px" align="center" mt={4}>
    {'Copyright © LunaSync '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
