import { Button, ButtonProps } from '@mantine/core';
import { Link as ReactRouterLink } from 'react-router-dom';

interface LinkProps extends ButtonProps {
  text: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Link = ({ text, onClick, disabled, to, ...props }: LinkProps) =>
  disabled ? (
    <Button onClick={onClick} disabled {...props}>
      {text}
    </Button>
  ) : (
    <Button {...props} onClick={onClick} to={to} component={ReactRouterLink}>
      {text}
    </Button>
  );
