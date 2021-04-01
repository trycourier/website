import React from "react";

import Simple from "../templates/simple";

import Container from "../components/container";

import { Heading, Text } from "@chakra-ui/core";

const WelcomePage: React.FC = () => {
  return (
    <Simple title="Courier Starters">
      <Container>
        <Heading>Initiated the experience, check your phone :)</Heading>
        <Text>Love us or love us?</Text>
      </Container>
    </Simple>
  );
};

export default WelcomePage;
