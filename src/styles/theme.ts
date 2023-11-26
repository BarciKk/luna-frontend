import { fontColors, headingColors, mainColors } from "./colors";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Lora', serif",
  fontSizes: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
  colors: {
    fontColors,
    headingColors,
    mainColors,
  },
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },
});
