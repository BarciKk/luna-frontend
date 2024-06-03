import { Stack, Typography } from '@mui/material';

export const InfoBlock = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => (
  <Stack maxWidth={650} justifyContent="center" alignItems="center">
    <img
      width={200}
      height={200}
      src={img}
      alt={title}
      style={{ marginBottom: '12px' }}
    />
    <Typography
      textAlign="center"
      color="primary"
      fontSize="36px"
      fontWeight="thin"
      m={2}
    >
      {title}
    </Typography>
    <Typography
      textAlign="center"
      p={1}
      mt={2}
      maxWidth="480px"
      fontSize="16px"
    >
      {description}
    </Typography>
  </Stack>
);
