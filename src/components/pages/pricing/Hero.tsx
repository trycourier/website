import { Box, Heading, Text } from "@chakra-ui/react";
import Container from "components/Container";

const Hero = () => (
  <Container maxWidth={1200}>
    <Box pt={"160px"} textAlign="center" color="white" pb={"310px"}>
      <Box>
        <Heading textAlign="center" as="h1" variant={"h1"} mx="auto">
          Pricing that scales with you
        </Heading>
        <Text
          textAlign="center"
          my={"32px"}
          variant="body1"
          mx="auto"
          w={{ base: "100%", md: "65%", lg: "100%" }}
        >
          Start sending for free. Upgrade to enable volume discounts and
          enhanced compliance.
        </Text>
      </Box>
    </Box>
  </Container>
);

export default Hero;
