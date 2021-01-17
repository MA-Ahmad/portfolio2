import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import customTheme from './theme/theme';
import 'focus-visible/dist/focus-visible';

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...customTheme,
  breakpoints
};

ReactDOM.render(
  <ChakraProvider theme={newTheme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
