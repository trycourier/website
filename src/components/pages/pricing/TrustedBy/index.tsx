import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import TrustedByCustomers from "components/pages/home/TrustedBy/Customers";
import Container from "components/Container";

const TrustedBy = () => (
  <Container>
    <Flex align="center" direction="column" mt={{ base: "92px", lg: "132px" }}>
      <Heading variant="h4" textAlign="center">
        Trusted by product teams at
      </Heading>
      <TrustedByCustomers />
    </Flex>
  </Container>
);

export default TrustedBy;
