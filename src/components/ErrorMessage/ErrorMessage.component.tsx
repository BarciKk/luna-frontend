import { Typography, TypographyProps } from '@mui/material';

export const ErrorMessage = ({
  message,
  ...props
}: TypographyProps & { message: string | undefined }) => {
  return message ? (
    <Typography textAlign="center" fontSize="14px" color="error" {...props}>
      {message}
    </Typography>
  ) : null;
};
