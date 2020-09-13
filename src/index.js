import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
