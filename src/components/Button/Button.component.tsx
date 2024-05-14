import React from 'react';
import {
  Button as MaterialButton,
  ButtonProps,
  CircularProgress,
} from '@mui/material';

type CustomButtonProps = ButtonProps & {
  text: string;
  isLoading?: boolean;
};

export const Button: React.FC<CustomButtonProps> = ({
  text,
  isLoading = false,
  ...props
}) => (
  <MaterialButton {...props} type="submit" color="primary" variant="contained">
    {isLoading ? <CircularProgress size={24} /> : text}
  </MaterialButton>
);
