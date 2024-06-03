import { Typography, styled } from '@mui/material';

export const CustomTypography = styled(Typography)`
  padding: 1rem;
  margin-top: 2rem;
  max-width: 480px;
  font-size: 16px;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? 'white' : theme.palette.primary.dark};
`;
export const CustomTypographyDescription = styled(Typography)`
  padding: 1rem;
  margin-top: 2rem;
  max-width: 480px;
  font-size: 16px;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? 'white' : theme.palette.info.main};
`;
