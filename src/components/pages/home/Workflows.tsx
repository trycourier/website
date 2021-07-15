import { Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

import workflows from "../../../../public/images/pages/home/workflows/workflows.png";

const Workflows = () => (
  <Box mt={{ base: "60px", lg: "200px" }} mb={{ base: "20px", lg: "160px" }}>
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box display={{ base: "none", lg: "block" }} mt={{ lg: -10 }}>
          <Image
            src={workflows}
            width={526}
            height={364}
            alt="Notification workflow management view"
          />
        </Box>
      }
      tag={{
        label: "Workflows",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Reach users at the right time on the right channel
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Prioritize your channels and use both conditional logic and user
          preferences, to control who sees what, when, and through which
          channel.
        </Text>
      </Box>
    </FeatureSection>
  </Box>
);

export default Workflows;
