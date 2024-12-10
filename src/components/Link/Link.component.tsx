import { TypographyProps } from '@mui/material';
import { Typography } from 'components/Typography';
import { Link as ReactRouterLink } from 'react-router-dom';

interface CustomLinkProps extends TypographyProps {
  to: string;
  text: string;
}

export const Link = ({ to, text, ...props }: CustomLinkProps) => (
  <ReactRouterLink to={to}>
    <Typography
      maxLength={24}
      component="span"
      color="primary"
      fontSize="14px"
      {...props}
      text={text}
    />
  </ReactRouterLink>
);
