import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from '@mui/material/styles';
import { lightTheme, darkTheme } from 'theme';
import { useCookies } from 'hooks';
import { cookieKeys } from 'enums/CookiesKeys.enums';

type ThemeVariants = 'light' | 'dark';

interface ThemeContextType {
  toggleMode: () => void;
  changePrimaryColor: (color: string) => void;
  primaryColor: string;
  mode: ThemeVariants;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleMode: () => {},
  changePrimaryColor: () => {},
  primaryColor: lightTheme.palette.primary.main,
  mode: 'light',
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { setCookie, getCookie } = useCookies();
  const [mode, setMode] = useState<ThemeVariants>('light');
  const [primaryColor, setPrimaryColor] = useState(
    getCookie(cookieKeys.themeColor || lightTheme.palette.primary.main),
  );

  const createCustomTheme = (baseTheme: Theme): Theme =>
    createTheme({
      ...baseTheme,
      palette: {
        ...baseTheme.palette,
        primary: {
          ...baseTheme.palette.primary,
          main: primaryColor || baseTheme.palette.primary.main,
        },
      },
    });

  const theme = useMemo(
    () => createCustomTheme(mode === 'light' ? lightTheme : darkTheme),
    [primaryColor, mode],
  );

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    setCookie(cookieKeys.theme, newMode);
  };

  const changePrimaryColor = (color: string) => {
    setPrimaryColor(color);
    setCookie(cookieKeys.themeColor, color);
  };

  return (
    <ThemeContext.Provider
      value={{ toggleMode, changePrimaryColor, primaryColor, mode }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
