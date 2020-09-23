import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  theme,
  ThemeProvider,
  ColorModeProvider,
  CSSReset
} from "@chakra-ui/core";
import customTheme from "./theme/theme";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <ColorModeProvider>
      <CSSReset />
      <App />
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
