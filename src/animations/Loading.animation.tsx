import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const LoadingAnimation = () => {
  return (
    <Box>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50px',
          height: '50px',
        }}
      >
        <img
          src="../src/assets/Logo/LunaSyncLogo.png"
          alt="Loading"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </motion.div>
    </Box>
  );
};
