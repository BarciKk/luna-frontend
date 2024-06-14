import { Typography, TypographyProps } from '@mui/material';

export const ErrorMessage = ({
  message,
  ...props
}: TypographyProps & { message: any }) => {
  return message ? (
    <Typography
      textAlign="center"
      fontSize="14px"
      color="error"
      mb={2}
      {...props}
    >
      {message}
    </Typography>
  ) : null;
};
