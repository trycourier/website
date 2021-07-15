import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Hero = () => (
  <Container maxW="700px">
    <Box
      pt={{ base: "100px", lg: "160px" }}
      pb={{ base: "200px", xl: "280px" }}
      textAlign="center"
      color="white"
    >
      <Heading textAlign="center" as="h1" variant="h1">
        About Us
      </Heading>
      <Text textAlign="center" mt="29px" mb="32px" variant="body1">
        <b>Courier's mission is to make software to human communication delightful.</b>
      </Text>
    </Box>
  </Container>
);

export default Hero;
