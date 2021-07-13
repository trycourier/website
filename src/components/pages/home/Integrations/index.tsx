import { Flex, Heading, Text, Box, Tag } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";
import TextButton from "components/buttons/TextButton";
import { documentation } from "constants/urls";
import Animation from "./animation";
import FeatureSection from "components/common/FeatureSection";

const Integrations = () => (
  <Box
    mt={{ base: "60px", lg: "230px" }}
    mb={{ base: "20px", lg: "160px" }}
    pos="relative"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box
          mx={-5}
          mt={{ base: -5, lg: -20 }}
          pos={{ lg: "absolute" }}
          left="50%"
          right={0}
        >
          <Animation />
        </Box>
      }
      tag={{
        label: "Integrations",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box>
        <Heading as="h3" variant="h3" maxW={{ lg: "480px" }}>
          Deploy notifications to different channels from the same location
        </Heading>
        <Text
          variant="body1"
          mt={6}
          mb={8}
          color="secondary.darkAlpha"
          maxW={{ lg: "520px" }}
        >
          With 20+ integrations, you can reach users on the channels they prefer
          –– all with the simple flip of a switch.
        </Text>
        <InternalLink to={documentation}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default Integrations;
