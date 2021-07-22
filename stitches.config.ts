import { createCss } from "@stitches/react";

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors: {
      darkTextColor: "hsl(222,5%,18%)",
      lightTextColor: "hsl(225,37%,92%)",
      gray500: "hsl(206,10%,76%)",
      gray300: "hsl(206,10%,90%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      purple700: "hsl(252,78%,40%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
