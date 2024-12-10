import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { FC } from 'react';

type CustomTypographyProps = TypographyProps & {
  text: string;
  maxLength?: number;
};

export const Typography: FC<CustomTypographyProps> = ({
  text,
  maxLength = 32,
  ...props
}) => {
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  return (
    <MuiTypography {...props} component="span">
      {truncatedText}
    </MuiTypography>
  );
};
