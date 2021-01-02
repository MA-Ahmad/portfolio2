import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import Routes from '../Routes';

const Layout = ({ children }) => {
  const { colorMode, setColorMode } = useColorMode();
  if (colorMode === undefined) setColorMode('light');
  const brandColorTheme =
    customTheme.colors.mode[colorMode ? colorMode : 'light'];

  return (
    <div style={{ minHeight: '90vh', background: brandColorTheme.background }}>
      <Routes />
    </div>
  );
};

export default Layout;
