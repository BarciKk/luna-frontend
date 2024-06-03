import { Typography, TypographyProps } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

interface CustomLinkProps extends TypographyProps {
  to: string;
  text: string;
}

export const Link = ({ to, text, ...props }: CustomLinkProps) => (
  <ReactRouterLink to={to}>
    <Typography component="span" color="primary" fontSize="16px" {...props}>
      {text}
    </Typography>
  </ReactRouterLink>
);
