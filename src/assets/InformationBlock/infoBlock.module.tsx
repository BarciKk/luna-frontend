import {} from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import {
  InfoBlockAnimation,
  logoVariants,
  titleVariants,
  descriptionVariants,
} from 'animations/InfoBlock.animation';
import { motion } from 'framer-motion';
import { CustomTypographyDescription } from 'styles/CustomTypography';

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
    <InfoBlockAnimation>
      <Stack maxWidth={650} justifyContent="center" alignItems="center">
        <motion.img
          width={200}
          height={200}
          src={img}
          alt={title}
          style={{ marginBottom: '12px' }}
          variants={logoVariants}
        />
        <motion.div variants={titleVariants}>
          <Typography
            textAlign="center"
            fontSize="36px"
            fontWeight="thin"
            m={2}
          >
            {title}
          </Typography>
        </motion.div>
        <motion.div variants={descriptionVariants}>
          <CustomTypographyDescription textAlign="center">
            {description}
          </CustomTypographyDescription>
        </motion.div>
      </Stack>
    </InfoBlockAnimation>
  );
};
