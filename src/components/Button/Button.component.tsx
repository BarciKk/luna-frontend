import { FC } from 'react';
import {
  Button as MaterialButton,
  ButtonProps,
  CircularProgress,
} from '@mui/material';

type CustomButtonProps = ButtonProps & {
  text: string;
  isLoading?: boolean;
};

export const Button: FC<CustomButtonProps> = ({
  text,
  isLoading = false,
  ...props
}) => (
  <MaterialButton {...props} type="submit" variant="contained">
    {isLoading ? <CircularProgress sx={{ color: 'white' }} size={24} /> : text}
  </MaterialButton>
);
