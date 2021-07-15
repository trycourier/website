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
    label: "We maintain a high bar for talent. Courier is a place where you will work with the smartest people in your career.",
  },
  {
    icon: chat,
    label:
      "We value honest, direct feedback. We beleive the only way we can all improve is to provide direct feedback in real time.",
  },
  {
    icon: flag,
    label: "We value team members who have opinions. We empower everyone to make decisions.",
  },
  {
    icon: heart,
    label: "We succeed together, not individually. We beleive effective collaboration is key for innovation.",
  },
  {
    icon: doc,
    label:
      "We write things down. We beleive that the process of writing forces clarity in thought and makes discussing complex topics much easier.",
  },
  {
    icon: glasses,
    label: "We value transparency. We beleive the more context talented people have, the more empowered they are to do great work.",
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
