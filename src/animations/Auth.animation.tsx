import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const AuthAnimation = ({ children }: PropsWithChildren) => (
  <motion.div
    transition={{ duration: 0.45, ease: 'easeInOut' }}
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
  >
    {children}
  </motion.div>
);
