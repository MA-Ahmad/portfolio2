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
} from '@chakra-ui/core';
import { AiOutlineStar, AiOutlineShareAlt } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';

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
  const repos = [
    {
      title: 'MA-Ahmad/reactBlog',
      description:
        'A React Blog App built by using libraries like ChakraUI, Formik.',
      languages: 'Javascript, React, ChakraUi, Formik',
      url: 'https://github.com/MA-Ahmad/reactBlog',
      live: 'https://ma-ahmad.github.io/reactBlog',
      stars: '4',
      fork: '1'
    },
    {
      title: 'MA-Ahmad/blog-app-react-frontend',
      description: 'React frontend of a blog app with rails on backend.',
      languages: 'Javascript, ChakraUi',
      url: 'https://github.com/MA-Ahmad/blog-app-react-frontend',
      live: 'https://blog-frontend-react.herokuapp.com',
      stars: '3'
    },
    {
      title: 'MA-Ahmad/react_rails_blog',
      description: 'A simple react+rails(RR) CRUD app with tailwindcss.',
      languages: 'Ruby, Rails, Javascript, React, TailwindCss',
      url: 'https://github.com/MA-Ahmad/react_rails_blog',
      live: 'https://react-on-rails-blog.herokuapp.com'
    },
    {
      title: 'MA-Ahmad/blog-app-rails-backend',
      description: 'Rails backend api for blog app with react on frontend.',
      languages: 'Ruby, Rails',
      url: 'https://github.com/MA-Ahmad/blog-app-rails-backend'
    },
    {
      title: 'MA-Ahmad/rails-authentication-app',
      description:
        'Simple Authentication API that can be used with any front-end app like React, Vue, Angular app.',
      languages: 'Ruby, Rails',
      url: 'https://github.com/MA-Ahmad/rails-authentication-app'
    },
    {
      title: 'MA-Ahmad/Video-to-text',
      description: 'Convert a video to text using ruby.',
      languages: 'Ruby',
      url: 'https://github.com/MA-Ahmad/Video-to-text'
    }
  ];
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
