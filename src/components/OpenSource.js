import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Link,
  Tooltip,
  useColorMode
} from '@chakra-ui/react';
import { AiOutlineStar, AiOutlineShareAlt } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { repos } from '../data/repositories';

function Repo({
  title,
  description,
  languages,
  url,
  live,
  colorMode,
  stars,
  fork
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between" marginBottom={3}>
        <Flex>
          <Box
            as={BiBookBookmark}
            size="25px"
            color={`mode.${colorMode}.text`}
          />
          <Stack spacing={2} pl={3}>
            <Heading
              isExternal
              as={Link}
              href={url}
              fontSize="xl"
              color={`mode.${colorMode}.career.text`}
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
            >
              {title}
            </Heading>
          </Stack>
        </Flex>
        <Flex>
          {live && (
            <Tooltip hasArrow label="Live" placement="top">
              <Link href={live} isExternal>
                <Box
                  as={HiOutlineExternalLink}
                  size="20px"
                  color={`mode.${colorMode}.text`}
                />
              </Link>
            </Tooltip>
          )}
          <Box
            as={FiGithub}
            size="20px"
            marginLeft={4}
            color={`mode.${colorMode}.text`}
          />
        </Flex>
      </Flex>
      <Text color={`mode.${colorMode}.career.subtext`}>{description}</Text>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {languages.split(',').map(language => (
          <Tag
            size="sm"
            padding="0 3px"
            key={language}
            color="#4299E1"
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {language}
          </Tag>
        ))}
        {stars && (
          <Flex alignItems="center">
            <Box
              as={AiOutlineStar}
              size="18px"
              marginLeft={2}
              color={`mode.${colorMode}.text`}
            />
            <Text
              marginLeft={2}
              fontSize={15}
              color={`mode.${colorMode}.career.subtext`}
            >
              {stars}
            </Text>
          </Flex>
        )}
        {fork && (
          <Flex alignItems="center">
            <Box
              as={AiOutlineShareAlt}
              size="18px"
              color={`mode.${colorMode}.text`}
            />
            <Text
              marginLeft={2}
              fontSize={15}
              color={`mode.${colorMode}.career.subtext`}
            >
              {fork}
            </Text>
          </Flex>
        )}
      </Stack>
    </Box>
  );
}

const OpenSource = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={3} marginBottom={5}>
        <Heading color={`mode.${colorMode}.text`}>Open Source</Heading>
        <Text color={`mode.${colorMode}.subtext`}>
          This page lists some of the open source repositories I have published
          or contribute to.
        </Text>
      </Stack>
      <Stack spacing={4} marginBottom={6}>
        {repos.map((repo, index) => (
          <Repo
            key={index}
            title={repo.title}
            description={repo.description}
            languages={repo.languages}
            url={repo.url}
            live={repo.live}
            stars={repo.stars}
            fork={repo.fork}
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default OpenSource;
