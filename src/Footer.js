import React from 'react';
import { Stack, IconButton, Link } from '@chakra-ui/react';
import siteConfig from './configs/site-config';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
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
      {siteConfig.author.accounts.map(sc => (
        <IconButton
          as={Link}
          isExternal
          href={sc.url}
          aria-label={sc.label}
          size="lg"
          colorScheme={sc.type}
          icon={sc.icon}
          {...iconProps}
        />
      ))}
    </Stack>
  );
};

export default Footer;
