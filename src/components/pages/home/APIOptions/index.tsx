import { Heading, Text, Box } from "@chakra-ui/react";
import TextButton from "components/buttons/TextButton";
import InternalLink from "components/InternalLink";
import { documentation } from "constants/urls";
import CodeBox from "components/common/CodeBox";
import data from "./data";
import FeatureSection from "components/common/FeatureSection";

const APIOptions = () => (
  <Box
    pt={{ base: "60px", lg: "216px" }}
    pb={{ base: "60px", lg: "160px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      graphicAlignment="left"
      graphic={
        <Box mt={{ lg: -12 }} pt={5} pr={{ lg: 5 }} h="430px">
          <CodeBox h="100%" examples={data} />
        </Box>
      }
      tag={{
        label: "Built for Developers",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2} maxW={{ lg: "530px" }}>
        <Heading as="h3" variant="h3">
          All your notifications, just one API
        </Heading>
        <Text mt={6} mb={8} variant="body1" color="secondary.darkAlpha">
          With just one easy-to-use API, you can access client libraries written
          in the most popular programming languages, and deploy notifications
          faster with cleaner code.
        </Text>
        <InternalLink to={documentation}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default APIOptions;
