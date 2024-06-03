import { useTheme } from '../../providers/ThemeProvider';
import { StyledSwitch } from '../../styles/StyledSwitch';

export const ThemeSwitch = () => {
  const { darkMode, toggleTheme } = useTheme();
  return <StyledSwitch onChange={toggleTheme} checked={darkMode} />;
};
