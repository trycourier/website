import { Box, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Container from "components/Container";

import lightbulb from "../../../../public/images/pages/about/how-we-work/lightbulb.svg";
import chat from "../../../../public/images/pages/about/how-we-work/chat.svg";
import flag from "../../../../public/images/pages/about/how-we-work/flag.svg";
import heart from "../../../../public/images/pages/about/how-we-work/heart.svg";
import doc from "../../../../public/images/pages/about/how-we-work/doc.svg";
import glasses from "../../../../public/images/pages/about/how-we-work/glasses.svg";

const highlights = [
  {
    icon: lightbulb,
    label: "We hire smart, engaged employees who are great at what they do",
  },
  {
    icon: chat,
    label:
      "We all trust each other to provide honest feedback on ideas and initiatives",
  },
  {
    icon: flag,
    label: "We each have the freedom to decide what we work on",
  },
  {
    icon: heart,
    label: "We all seek to help the business, not please the boss(es)",
  },
  {
    icon: doc,
    label:
      "We all have access to the resources and information we need to make good decisions",
  },
  {
    icon: glasses,
    label: "We all do great work and have fun doing it!",
  },
];

const HowWeWork = () => (
  <Container maxW={1280}>
    <Box
      mt={{ base: "-182px", xl: "-232px" }}
      padding={5}
      bgGradient="linear-gradient(128.55deg, rgba(255, 255, 255, 0.5) -3.29%, rgba(255, 255, 255, 0) 98.07%)"
      boxShadow="0 0 0 1px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.55)"
      borderRadius={24}
      sx={{ backdropFilter: "blur(30.8477px)" }}
      color="secondary.dark"
    >
      <Box
        borderRadius={16}
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
        background="white"
        px={{ base: 5, lg: "55px" }}
        py={{ base: 8, md: 12, lg: 20 }}
      >
        <Heading textAlign="center" variant="h2" mb={12}>
          How we work
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacingX="45px"
          spacingY="32px"
        >
          {highlights.map((highlight) => (
            <Flex key={highlight.label} alignItems="center">
              <Box flexShrink={0}>
                <Image layout="fixed" src={highlight.icon} />
              </Box>

              <Text ml="18px" mr="33px" variant="body2">
                {highlight.label}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  </Container>
);

export default HowWeWork;
