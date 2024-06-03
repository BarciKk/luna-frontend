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
  variant = 'contained',
  ...props
}) => (
  <MaterialButton {...props} type="submit" variant={variant}>
    {isLoading ? <CircularProgress sx={{ color: 'white' }} size={24} /> : text}
  </MaterialButton>
);
