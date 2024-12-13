import { FC, ReactNode } from 'react';
import {
  Button as MaterialButton,
  ButtonProps,
  CircularProgress,
} from '@mui/material';

type CustomButtonProps = ButtonProps & {
  text: string;
  isLoading?: boolean;
  icon?: ReactNode;
  alignLeft?: boolean;
};

export const Button: FC<CustomButtonProps> = ({
  text,
  isLoading = false,
  icon,
  variant = 'contained',
  alignLeft = false,
  ...props
}) => (
  <MaterialButton
    data-testid="button-component"
    {...props}
    type="submit"
    startIcon={icon}
    variant={variant}
    sx={{
      ':hover': {
        backgroundColor: 'primary.main',
        color: 'white',
      },
      marginY: 3,
      ...(alignLeft && {
        width: '100%',
        textAlign: 'left',
        justifyContent: 'flex-start',
      }),
    }}
  >
    {isLoading ? (
      <CircularProgress role="loading" sx={{ color: 'white' }} size={24} />
    ) : (
      text
    )}
  </MaterialButton>
);
