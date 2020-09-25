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
import "focus-visible/dist/focus-visible";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...customTheme,
  breakpoints
};

ReactDOM.render(
  <ThemeProvider theme={newTheme}>
    <ColorModeProvider>
      <CSSReset />
      <App />
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
