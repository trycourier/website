import { Box, Heading } from "@chakra-ui/react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Compare = () => (
  <Box mt={{ base: "62px", lg: "102px" }} maxW={1400} mx="auto">
    <Heading
      as="h2"
      variant="h2"
      textAlign="center"
      mb={{ base: 10, lg: "none" }}
    >
      Compare plans
    </Heading>
    <Desktop />
    <Mobile />
  </Box>
);

export default Compare;
