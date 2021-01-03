import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Avatar,
  IconButton,
  useColorMode,
  Link
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMenu } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const MenuItems = ({ colorMode, children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    color={`mode.${colorMode}.color`}
    _hover={{ textDecoration: 'underline' }}
  >
    {children}
  </Text>
);

const iconProps = {
  variant: 'ghost',
  size: 'lg',
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
        mr={{ md: '5' }}
        width={{ sm: '100%', md: 'auto' }}
        justifyContent={{ sm: 'space-between', md: 'flex-start' }}
      >
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          <Avatar
            name="Muhammad Ahmad"
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Heading>

        <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
          <FiMenu
            fontSize="2.5rem"
            color={colorMode === 'light' ? '#000' : '#fff'}
          />
        </Box>
      </Flex>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: '100%', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Link
          as={NavLink}
          exact
          to="/"
          activeStyle={{ textDecoration: 'underline' }}
          borderRadius={{ sm: '5px' }}
          mr={{ sm: '0', md: '6' }}
          color={`mode.${colorMode}.color`}
          padding={{ sm: '1rem' }}
          display={{ sm: 'block' }}
          _visited={{ outline: 'none' }}
        >
          About
        </Link>
        <Link
          as={NavLink}
          exact
          to="/articles"
          activeStyle={{ textDecoration: 'underline' }}
          borderRadius={{ sm: '5px' }}
          mr={{ sm: '0', md: '6' }}
          padding={{ sm: '1rem' }}
          display={{ sm: 'block' }}
          color={`mode.${colorMode}.color`}
        >
          Articles
        </Link>
        <Link
          as={NavLink}
          exact
          to="/open-source"
          activeStyle={{ textDecoration: 'underline' }}
          borderRadius={{ sm: '5px' }}
          mr={{ sm: '0', md: '6' }}
          padding={{ sm: '1rem' }}
          display={{ sm: 'block' }}
          color={`mode.${colorMode}.color`}
        >
          Open Source
        </Link>
        <Link
          as={NavLink}
          exact
          to="/projects"
          activeStyle={{ textDecoration: 'underline' }}
          borderRadius={{ sm: '5px' }}
          mr={{ sm: '0', md: '6' }}
          padding={{ sm: '1rem' }}
          display={{ sm: 'block' }}
          // color={{ sm: colorMode === 'light' ? '#000' : '#fff' }}
          color={`mode.${colorMode}.color`}
        >
          Projects
        </Link>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ sm: 4, md: 0 }}
      >
        <IconButton
          aria-label="Color Mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
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
