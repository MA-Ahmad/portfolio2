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
  IconButton,
  Image,
  useColorMode,
  Badge,
  Grid
} from '@chakra-ui/core';
import { FaGraduationCap } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import PhaedraLogo from '../assets/images/phaedra.jpeg';
import BrainxLogo from '../assets/images/brainxtech.png';
import CodenyaLogo from '../assets/images/codenya.png';
import BrainplowLogo from '../assets/images/brainplow.jpg';
import peterpitch_img from '../assets/images/Projects/peterpitch.png';
import workof_img from '../assets/images/Projects/workof.png';
import notch_img from '../assets/images/Projects/notch.png';
import souq_img from '../assets/images/Projects/souq.png';
import gosave_img from '../assets/images/Projects/gosave.png';

function Project_test({ title, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Flex
        p={5}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
      >
        <Box>
          <Image
            rounded="md"
            width="12em"
            // src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
            src={workof_img}
          />
        </Box>
        <Stack mt={2} pl={4}>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            lineHeight="short"
            color={`mode.${colorMode}.subtext`}
          >
            {desc}
          </Text>
          <Stack isInline>
            {tech.split(',').map(tag => (
              <Tag
                size="sm"
                padding="0 3px"
                key={tag}
                color="#4299E1"
                fontWeight="bold"
                color={`mode.${colorMode}.career.subtext`}
                bgColor={`mode.${colorMode}.career.tagBG`}
              >
                {tag}
              </Tag>
            ))}
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}

function Project({ title, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={2}
        p={5}
        _hover={{ shadow: 'md' }}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
      >
        <Box w="100%" h="100%">
          <Image
            rounded="md"
            src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
          />
        </Box>
        <Box w="100%">
          <Stack mt={2} pl={4}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="short"
              color={`mode.${colorMode}.subtext`}
            >
              {desc}
            </Text>
            <Stack isInline>
              {tech.split(',').map(tag => (
                <Tag
                  size="sm"
                  padding="0 3px"
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  color={`mode.${colorMode}.career.subtext`}
                  bgColor={`mode.${colorMode}.career.tagBG`}
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const Projects = () => {
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
      <Stack spacing={2}>
        <Project
          title="Peterpitch"
          desc="Peterpitch is a tool that takes the fun in your company seriously
          and turns your meetings into real performance boosters. With Peter
          Pitch, you round up the pack of employees and turn even the shakiest
          puppies into true wolves."
          tech="ruby, rails, react, javascript"
          image_url={peterpitch_img}
          colorMode={colorMode}
        />
        <Project
          title="Notch"
          desc="This is a project management website for design and procurement teams. It helps to collaborate and manage all of your floor plans in one place, writing specs, budgeting and timelines."
          tech="ruby, rails, javascript"
          image_url={notch_img}
          colorMode={colorMode}
        />
        <Project
          title="Workof Ecommerce"
          desc="This is an Ecommerce furniture site. It provides a single platform to multiple vendors where they can put their products on sale."
          tech="ruby, rails, javascript"
          image_url={workof_img}
          colorMode={colorMode}
        />
        <Project
          title="Souq of Qatar"
          desc="Souq of Qatar is online comparison website. This website is independent of any retailers, it displays the products of all the major stores.
          Just like when you compare prices and products while visiting physical shops and stores, online price comparison behaves in the same way."
          tech="ruby, rails"
          image_url={souq_img}
          colorMode={colorMode}
        />
        <Project
          title="GoSave"
          desc="The GoSave app let's you send allowances, assign chores, and approve spending all from your smartphone. These actions appear on each kid's toy, along with a live bank balance so they can watch their savings grow."
          tech="ruby, rails"
          image_url={gosave_img}
          colorMode={colorMode}
        />
      </Stack>
    </Stack>
  );
};

export default Projects;
