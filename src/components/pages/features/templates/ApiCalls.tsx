import { Box, Heading, Text } from "@chakra-ui/react";
import FeatureSection from "components/common/FeatureSection";
import CodeBox from "components/common/CodeBox";
import TextButton from "components/buttons/TextButton";
import InternalLink from "components/InternalLink";
import { documentation } from "constants/urls";

import codeExamples from "./codeExamples";

const Templates = () => (
  <Box
    mb="-156px"
    pt={{ base: "60px", lg: "168px" }}
    pb={{ base: "146px", lg: "204px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      graphicAlignment="left"
      graphic={
        <Box pt={5} pr={{ lg: 5 }} h="360px">
          <CodeBox h="100%" examples={codeExamples} />
        </Box>
      }
      tag={{
        label: "API Calls",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2} maxW={{ lg: "530px" }}>
        <Heading as="h3" variant="h3">
          Data gets passed to your templates as part of the send API call.
        </Heading>
        <Text mt={6} mb={8} variant="body1" color="secondary.darkAlpha">
          Lorem baby Lorem babyLorem babyLorem babyLorem babyLorem babyLorem
          babyLorem babyLorem baby Lorem babyLorem babyLorem babyLorem babyLorem
          baby
        </Text>
        <InternalLink to={documentation}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default Templates;
