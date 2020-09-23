import React from "react";
import { Stack, useColorMode } from "@chakra-ui/core";
import customTheme from "../theme/theme";
import Routes from "../Routes";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const brandColorTheme = customTheme.colors.mode["dark"];
  return (
    <>
      <Stack minH="90vh" backgroundColor={brandColorTheme.background}>
        {/* <div
        style={{ minHeight: "90vh", background: brandColorTheme.background }}
      > */}
        <Routes />
        {children}
      </Stack>
    </>
  );
};

export default Layout;
