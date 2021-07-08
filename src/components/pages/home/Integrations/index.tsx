import { Flex, Heading, Text, Box, Tag } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";
import TextButton from "components/buttons/TextButton";
import { documentation } from "constants/urls";
import Animation from "./animation";

const Interations = () => (
  <Flex
    mt={{ base: "92px", lg: "132px" }}
    direction={{ base: "column", lg: "row" }}
    padding="0 20px"
  >
    <Box
      w={{ base: "100%", lg: "40%" }}
      ml={{ base: 0, xl: "100px", "2xl": "330px" }}
    >
      <Tag
        sx={{
          color: "secondary.salmon",
          backgroundColor: "primary.sand",
          fontSize: "10px",
          fontWeight: "600",
          marginBottom: "18px",
        }}
      >
        INTEGRATIONS
      </Tag>
      <Heading variant="h3">
        Deploy notifications to different channels from the same location
      </Heading>
      <Text mt={"32px"} w={"95%"} variant="body1" mb={"42px"}>
        With 20+ integrations, you can reach users on the channels they prefer
        –– all with the simple flip of a switch.
      </Text>
      <InternalLink to={documentation}>
        <TextButton> Check out our docs </TextButton>
      </InternalLink>
    </Box>
    <Animation />
  </Flex>
);

export default Interations;
