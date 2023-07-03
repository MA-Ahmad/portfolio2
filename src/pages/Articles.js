import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Tag,
  Link,
  Tooltip,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import { FiBookmark, FiGithub } from 'react-icons/fi';

function Feature({
  title,
  desc,
  tags,
  article_url,
  github_url,
  colorMode,
  ...rest
}) {
  const openUrl = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  };
  return (
    <Box
      p={5}
      isExternal
      as={Link}
      href={article_url}
      _hover={{ shadow: 'md', textDecoration: 'none' }}
      cursor="pointer"
      borderWidth="1px"
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
      {...rest}
    >
      <Box
        as={FiBookmark}
        size="25px"
        width="1.5rem"
        height="1.5rem"
        position="absolute"
        color="#cbd5e0"
        fill={`mode.${colorMode}.background`}
        right="0.5rem"
        top="-8px"
        marginBottom="1rem"
      />
      <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
        {title}
      </Heading>
      <Stack spacing={2} mt={1} isInline alignItems="center">
        {tags.split(',').map(tag => (
          <Tag
            size="sm"
            padding="0 3px"
            key={tag}
            color="#4299E1"
            bgColor={`mode.${colorMode}.tagBG`}
          >
            {tag}
          </Tag>
        ))}
        <div style={{ marginLeft: '5px', paddingBottom: '3px' }}>
          <Tooltip label="Source Code" placement="right">
            <IconButton
              aria-label="Github Link"
              size="lg"
              icon={<FiGithub />}
              color={`mode.${colorMode}.text`}
              variant="unstyled"
              height="auto"
              minWidth="auto"
              onClick={e => openUrl(e, github_url)}
            />
          </Tooltip>
        </div>
      </Stack>
      <Text mt={3} color={`mode.${colorMode}.subtext`}>
        {desc}
      </Text>
    </Box>
  );
}

const Articles = () => {
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
      <Stack spacing={4}>
        <Heading color={`mode.${colorMode}.text`}>Featured Articles</Heading>
        <Feature
          title="Create an app with react(context api) and ruby on rails by using chakraUI and Formik"
          desc="The main goal of this app to understand how to create a react app on the basis of rails back-end api with the mixture of context-api(react) and chakraUI."
          tags="ruby, rails, react, chakraUi, formik"
          article_url="https://dev.to/m_ahmad/create-an-app-with-react-context-api-and-ruby-on-rails-by-using-chakraui-and-formik-40c1"
          github_url="https://github.com/MA-Ahmad/blog-app-react-frontend"
          colorMode={colorMode}
        />
        <Feature
          title="Create ROR+React(RR) App with Tailwindcss"
          desc="RailsReactBlog is a CRUD app. It'll help you to integrate tailwindcss with ROR+React app."
          tags="ruby, rails, react, tailwindcss"
          article_url="https://dev.to/m_ahmad/create-ror-react-rr-app-with-tailwindcss-3ccf"
          github_url="https://github.com/MA-Ahmad/react_rails_blog"
          colorMode={colorMode}
        />
        <Feature
          title="Create React App with chakraUI and formik libraries"
          desc="ReactBlog is a simple CRUD app that I built with React. Main goal of this app to learn how to implement hooks and how to use chakraUI and formik libraries with a react app."
          tags="react, chakraUi, formik"
          article_url="https://dev.to/m_ahmad/create-react-app-with-chakraui-and-formik-libraries-6fi"
          github_url="https://github.com/MA-Ahmad/reactBlog"
          colorMode={colorMode}
        />
        <Feature
          title="Convert Video to text in Ruby"
          desc="This article will guid you how to convert a video to text by using ruby."
          tags="ruby, ffmpeg, cloud storage"
          article_url="https://dev.to/maahmad/convert-video-to-text-in-ruby-5145"
          github_url="https://github.com/MA-Ahmad/Video-to-text"
          colorMode={colorMode}
        />
      </Stack>
    </Stack>
  );
};

export default Articles;
