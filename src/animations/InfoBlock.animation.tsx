import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const InfoBlockAnimation = ({ children }: PropsWithChildren) => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    {children}
  </motion.div>
);
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.8, ease: 'easeInOut' } },
};

const titleVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.3, ease: 'easeInOut' },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.3, ease: 'easeInOut', delay: 1.6 },
  },
};

export { logoVariants, titleVariants, descriptionVariants };
