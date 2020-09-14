import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/core";
import Header from "./header";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const colors = {
  black: "#000",
  white: "#fff",
  backgroundColor: "#000"
};

const newTheme = {
  ...theme,
  breakpoints,
  colors: colors
};

ReactDOM.render(
  <ThemeProvider theme={newTheme}>
    <CSSReset />
    <Header />
  </ThemeProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider resetCSS>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
