import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  FC,
  useEffect,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useCookies } from 'hooks';
import { cookieKeys } from 'enums/CookiesKeys.enums';
import { darkTheme, lightTheme } from 'theme';

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const { setCookie, getCookie } = useCookies();
  const [darkMode, setDarkMode] = useState(() => {
    const chosenTheme = getCookie(cookieKeys.theme);

    return chosenTheme ? chosenTheme : false;
  });

  useEffect(() => {
    setCookie(cookieKeys.theme, darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode: boolean) => !prevMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
