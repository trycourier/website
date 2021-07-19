import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import { signup } from "constants/urls";
import Container from "components/Container";

const Hero = () => (
  <Container>
    <Box pt={{ base: "100px", lg: "160px" }} textAlign="center" color="white">
      <Box>
        <Heading
          textAlign="center"
          as="h1"
          variant={"h1"}
          w={{ base: "100%", md: "75%", lg: "55%", xl: "55%" }}
          mx="auto"
        >
          Your Complete Communication Stack
        </Heading>
        <Text
          textAlign="center"
          mt={"29px"}
          mb={"32px"}
          variant="body1"
          w={{ base: "100%", md: "75%", lg: "55%", xl: "45%" }}
          mx="auto"
        >
          Courier's API and Studio enable developers to deliver the right
          message to the right user at the right time.
        </Text>
      </Box>
      <ButtonCTAGradient
        text={"Get started for free"}
        marginBottom={{ base: "200px", xl: "528px" }}
        link={signup}
      />
    </Box>
  </Container>
);

export default Hero;
