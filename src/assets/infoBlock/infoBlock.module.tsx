import {} from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { CustomTypographyDescription } from '../../styles/CustomTypography';

export const InfoBlock = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <Stack maxWidth={650} justifyContent="center" alignItems="center">
      <img
        width={200}
        height={200}
        src={img}
        alt={title}
        style={{ marginBottom: '12px' }}
      />
      <Typography textAlign="center" fontSize="36px" fontWeight="thin" m={2}>
        {title}
      </Typography>
      <CustomTypographyDescription textAlign="center">
        {description}
      </CustomTypographyDescription>
    </Stack>
  );
};
