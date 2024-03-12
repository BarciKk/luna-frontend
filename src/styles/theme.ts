import { Anchor, createTheme } from '@mantine/core';
import { darkerFontColors, lightFontColors, headingColors } from './colors';

export const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'never',
      },
    }),
  },
  defaultRadius: 'sm',
  focusRing: 'always',
  fontFamily: "Lora', serif",
  fontSizes: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  colors: {
    darkerFontColors,
    lightFontColors,
    headingColors,
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  radius: {
    xs: '0.375em',
    sm: '0.625em',
    md: '1em',
    lg: '1,25em',
    xl: '2em',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
  },
});
