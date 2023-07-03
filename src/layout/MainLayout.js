import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const { colorMode, setColorMode } = useColorMode();
  if (colorMode === undefined) setColorMode('light');
  const brandColorTheme =
    customTheme.colors.mode[colorMode ? colorMode : 'light'];

  return (
    <div style={{ minHeight: '90vh', background: brandColorTheme.background }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
