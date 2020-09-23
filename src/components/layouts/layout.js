import React from "react";
import Header from "../../header";
import Footer from "../../Footer";
import { Stack, useColorMode } from "@chakra-ui/core";
import customTheme from "../../theme/theme";
import Navigation from "../../navigation";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const brandColorTheme = customTheme.colors.mode["light"];
  return (
    <>
      {/* <Header /> */}
      <Stack minH="90vh" backgroundColor={brandColorTheme.background}>
        <Navigation />
        {children}
      </Stack>
      <Footer />
    </>
  );
};

export default Layout;
