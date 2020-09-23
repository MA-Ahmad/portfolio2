import React from "react";
import { Stack, useColorMode } from "@chakra-ui/core";
import customTheme from "../theme/theme";
import Routes from "../Routes";

const Layout = ({ children }) => {
  const { colorMode, setColorMode } = useColorMode();
  console.log("layout");
  console.log(colorMode);
  if (colorMode === undefined) setColorMode("light");
  const brandColorTheme =
    customTheme.colors.mode[colorMode ? colorMode : "light"];
  return (
    <>
      {/* <Stack minH="90vh" backgroundColor={brandColorTheme.background}> */}
      <div
        style={{ minHeight: "90vh", background: brandColorTheme.background }}
      >
        <Routes />
        {/* {children} */}
      </div>
      {/* </Stack> */}
    </>
  );
};

export default Layout;
