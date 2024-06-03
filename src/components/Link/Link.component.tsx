import { TypographyProps } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { CustomTypography } from '../../styles/CustomTypography';

interface CustomLinkProps extends TypographyProps {
  to: string;
  text: string;
}

export const Link = ({ to, text, ...props }: CustomLinkProps) => (
  <ReactRouterLink to={to}>
    <CustomTypography component="span" fontSize="16px" {...props}>
      {text}
    </CustomTypography>
  </ReactRouterLink>
);
