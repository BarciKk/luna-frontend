import { motion } from 'framer-motion';
import { useTheme } from '../../providers/ThemeProvider';
import { StyledSwitch } from '../../styles/CustomSwitch';

export const ThemeSwitch = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledSwitch
        onChange={toggleTheme}
        checked={darkMode}
        component={motion.div}
      />
    </motion.div>
  );
};
