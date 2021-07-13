import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import Image from "next/image";
import { signup } from "constants/urls";
import FeatureSection from "components/common/FeatureSection";

import heroImage from "../../../../../public/images/pages/features/templates/hero.png";

const Hero = () => (
  <FeatureSection
    pt={{ base: "100px", lg: "211px" }}
    pb="12px"
    color="white"
    graphicAlignment="right"
    tag={{
      label: "Templates",
      textColor: "white",
      bgColor: "rgba(255, 255, 255, 0.16)",
    }}
    graphic={
      <Box ml="38px" display={{ base: "none", lg: "block" }} mt={-10}>
        <Image
          src={heroImage}
          width={972}
          height={610}
          layout="fixed"
          alt="Templates Designer"
        />
      </Box>
    }
  >
    <Box mr={4}>
      <Heading as="h1" variant="h1">
        Perfectly formatted messages for every channel.
      </Heading>

      <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
        Lorem baby Lorem babyLorem babyLorem babyLorem babyLorem babyLorem
        babyLorem babyLorem baby
      </Text>
    </Box>

    <ButtonCTAGradient text="Get started for free" link={signup} />
  </FeatureSection>
);

export default Hero;
