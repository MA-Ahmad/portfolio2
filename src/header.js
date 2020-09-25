import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Avatar,
  IconButton,
  useColorMode,
  Link
} from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const MenuItems = ({ colorMode, children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    color={`mode.${colorMode}.color`}
    _hover={{ textDecoration: "underline" }}
  >
    {children}
  </Text>
);

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Header = props => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="#2D3748"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="55rem"
      paddingTop="3rem"
      {...props}
    >
      <Flex
        align="center"
        mr={{ md: "5" }}
        width={{ base: "100%", md: "auto" }}
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Avatar
            name="Muhammad Ahmad"
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Heading>

        <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="black"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
      </Flex>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "100%", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link
          as={NavLink}
          exact
          to="/"
          activeStyle={{ textDecoration: "underline" }}
          color={`mode.${colorMode}.color`}
          _visited={{ outline: "none" }}
        >
          <MenuItems colorMode={colorMode}>About</MenuItems>
        </Link>
        <Link
          as={NavLink}
          exact
          to="/articles"
          activeStyle={{ textDecoration: "underline" }}
          color={`mode.${colorMode}.color`}
        >
          <MenuItems colorMode={colorMode}>Articles</MenuItems>
        </Link>
        <Link
          as={NavLink}
          exact
          to="/open-source"
          activeStyle={{ textDecoration: "underline" }}
          color={`mode.${colorMode}.color`}
        >
          <MenuItems colorMode={colorMode}>Open Source</MenuItems>
        </Link>
        <Link
          as={NavLink}
          exact
          to="/projects"
          activeStyle={{ textDecoration: "underline" }}
          color={`mode.${colorMode}.color`}
        >
          <MenuItems colorMode={colorMode}>Projects</MenuItems>
        </Link>
        {/* <NavLink
          exact
          to="/articles"
          activeClassName="active"
          color={`mode.${colorMode}.color`}
          activeStyle={{ textDecoration: "underline" }}
        >
          <MenuItems colorMode={colorMode}>Articles</MenuItems>
        </NavLink>
        <NavLink
          exact
          to="/open-source"
          activeClassName="active"
          color={`mode.${colorMode}.color`}
          activeStyle={{ textDecoration: "underline" }}
        >
          <MenuItems colorMode={colorMode} textDecoration="underline">
            Open Source
          </MenuItems>
        </NavLink>
        <NavLink
          exact
          to="/blog"
          activeClassName="active"
          color={`mode.${colorMode}.color`}
          activeStyle={{ textDecoration: "underline" }}
        >
          <MenuItems colorMode={colorMode}>Blog</MenuItems>
        </NavLink> */}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton
          aria-label="Color Mode"
          icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
          onClick={toggleColorMode}
          size="lg"
          isRound={true}
          {...iconProps}
        />
      </Box>
    </Flex>
  );
};

export default Header;
