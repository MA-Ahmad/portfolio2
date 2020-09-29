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
import { FaGithub } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import Layout from '../layouts/layout';

function Feature({ title, desc, tags, article_url, github_url, ...rest }) {
  const openUrl = url => {
    window.open(url, '_blank');
  };

  return (
    <Box
      p={5}
      _hover={{ shadow: 'md' }}
      cursor="pointer"
      borderWidth="1px"
      borderColor="#e2e8f0"
      position="relative"
      rounded="md"
      onClick={() => openUrl(article_url)}
      {...rest}
    >
      <Box
        as={FiBookmark}
        size="25px"
        width="1.5rem"
        height="1.5rem"
        position="absolute"
        color="#cbd5e0"
        fill="#fff"
        right="0.5rem"
        top="-8px"
        marginBottom="1rem"
      />
      <Heading fontSize="xl">{title}</Heading>
      <Stack spacing={1} mt={1} isInline alignItems="center">
        {tags.split(',').map(tag => (
          <Tag size="sm" key={tag} color="#4299E1" bgColor="#EBF8FF">
            {tag}
          </Tag>
        ))}
        <Tooltip label="Source Code" placement="right">
          <Link href={github_url} isExternal style={{ textDecoration: 'none' }}>
            <FaGithub />
          </Link>
        </Tooltip>
      </Stack>
      <Text mt={2}>{desc}</Text>
    </Box>
  );
}

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Flex
        as="main"
        padding="1.5rem"
        color="#2D3748"
        marginLeft="auto"
        marginRight="auto"
        maxWidth="48rem"
        paddingTop="3rem"
        backgroundColor={`mode.${colorMode}.background`}
      >
        <Stack spacing={4}>
          <Feature
            title="Create an app with react(context api) and ruby on rails by using chakraUI and Formik"
            desc="The main goal of this app to understand how to create a react app on the basis of rails back-end api with the mixture of context-api(react) and chakraUI."
            tags="ruby, rails, react, chakraUi, formik"
            article_url="https://dev.to/m_ahmad/create-an-app-with-react-context-api-and-ruby-on-rails-by-using-chakraui-and-formik-40c1"
            github_url="https://github.com/MA-Ahmad/blog-app-react-frontend"
          />
          <Feature
            title="Create ROR+React(RR) App with Tailwindcss"
            desc="RailsReactBlog is a CRUD app. It'll help you to integrate tailwindcss with ROR+React app."
            tags="ruby, rails, react, tailwindcss"
            article_url="https://dev.to/m_ahmad/create-ror-react-rr-app-with-tailwindcss-3ccf"
            github_url="https://github.com/MA-Ahmad/react_rails_blog"
          />
          <Feature
            title="Create React App with chakraUI and formik libraries"
            desc="ReactBlog is a simple CRUD app that I built with React. Main goal of this app to learn how to implement hooks and how to use chakraUI and formik libraries with a react app."
            tags="react, chakraUi, formik"
            article_url="https://dev.to/m_ahmad/create-react-app-with-chakraui-and-formik-libraries-6fi"
            github_url="https://github.com/MA-Ahmad/reactBlog"
          />
          <Feature
            title="Convert Video to text in Ruby"
            desc="This article will guid you how to convert a video to text by using ruby."
            tags="ruby, ffmpeg, cloud storage"
            article_url="https://dev.to/maahmad/convert-video-to-text-in-ruby-5145"
            github_url="https://github.com/MA-Ahmad/Video-to-text"
          />
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Home;
