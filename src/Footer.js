import React from "react";
import { Stack, IconButton, Link } from "@chakra-ui/core";
import { FaGithub, FaDev, FaLinkedin, FaQuora } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Footer = props => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {/* <Button leftIcon={FiMail} variantColor="red">
          Use Extension
        </Button> */}
      <IconButton
        as={Link}
        isExternal
        href="https://github.com/MA-Ahmad"
        aria-label="Github Account"
        size="lg"
        icon={<FaGithub />}
        {...iconProps}
      />
      <IconButton
        as={Link}
        isExternal
        href="https://dev.to/m_ahmad"
        aria-label="Dev Account"
        size="lg"
        icon={<FaDev />}
        {...iconProps}
      />
      <IconButton
        as={Link}
        isExternal
        href="https://www.linkedin.com/feed/"
        aria-label="LinkedIn Account"
        size="lg"
        icon={<FaLinkedin />}
        {...iconProps}
      />
      <IconButton
        as={Link}
        isExternal
        href="mailto:muhammad.ahmad8043@gmail.com"
        aria-label="Mail ahmad"
        size="lg"
        icon={<FiMail />}
        {...iconProps}
      />
      <IconButton
        isExternal
        as={Link}
        href="https://www.quora.com/profile/Muhammad-Ahmad-66"
        aria-label="Quora Account"
        size="lg"
        icon={<FaQuora />}
        {...iconProps}
      />
      {/* <Link
        href="https://github.com/MA-Ahmad"
        isExternal
        mx="8px"
        style={{ textDecoration: "none" }}
      >
        <Box as={FaGithub} size="25px" />
      </Link>
      <Link
        href="https://dev.to/m_ahmad"
        isExternal
        mx="8px"
        style={{ textDecoration: "none" }}
      >
        <Box as={FaDev} size="25px" />
      </Link>
      <Link
        href="https://www.linkedin.com/feed/"
        isExternal
        mx="8px"
        style={{ textDecoration: "none" }}
      >
        <Box as={FaLinkedin} size="25px" />
      </Link>
      <Link
        href="mailto:muhammad.ahmad8043@gmail.com"
        isExternal
        mx="8px"
        style={{ textDecoration: "none" }}
      >
        <Box as={FiMail} size="25px" />
      </Link>
      <Link
        href="https://www.quora.com/profile/Muhammad-Ahmad-66"
        isExternal
        mx="8px"
        style={{ textDecoration: "none" }}
      >
        <Box as={FaQuora} size="25px" />
      </Link> */}
    </Stack>
  );
};

export default Footer;
