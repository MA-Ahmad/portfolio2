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
import UserIcon from './assets/images/user_icon.jpg';

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
  // const navLinkBg = useColorModeValue('white', 'gray.800')


  return (
    <>
      <Box
        w="100%"
        h="6px"
        bgGradient="linear(to-r, #6ab589, #f9f9f9,#dfb795)"
      />
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
              size="lg"
              src={UserIcon}
              // src="https://avatars2.githubusercontent.com/u/37842853?v=4"
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
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff'
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            color={`mode.${colorMode}.color`}
            padding="0.7rem"
            display={{ sm: 'block' }}
            _visited={{ outline: 'none' }}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            as={NavLink}
            exact
            to="/articles"
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff'
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            padding="0.7rem"
            display={{ sm: 'block' }}
            color={`mode.${colorMode}.color`}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
          >
            Articles
          </Link>
          <Link
            as={NavLink}
            exact
            to="/open-source"
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff'
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            padding="0.7rem"
            display={{ sm: 'block' }}
            color={`mode.${colorMode}.color`}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
          >
            Open Source
          </Link>
          <Link
            as={NavLink}
            exact
            to="/projects"
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff'
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            padding="0.7rem"
            display={{ sm: 'block' }}
            color={`mode.${colorMode}.color`}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
        </Box>

        <Box
          mt={{ sm: 3, md: 0 }}
          position={{ sm: 'absolute', md: 'unset' }}
          top="3.5rem"
          right="5.5rem"
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
    </>
  );
};

export default Header;
