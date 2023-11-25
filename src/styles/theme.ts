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
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },
  headings: {},
});

//!You should think how your application gonna look like figma and around that build some kinda ui(colors,fonts,all ..)
// .adwawd
