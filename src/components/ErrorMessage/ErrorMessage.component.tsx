import { Typography, TypographyProps } from '@mui/material';

export const ErrorMessage = ({
  message,
  ...props
}: TypographyProps & { message: string | undefined }) => {
  return message ? (
    <Typography color="error" textAlign="center" {...props}>
      {message}
    </Typography>
  ) : null;
};
