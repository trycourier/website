import React from "react";

import Simple from "../templates/simple";

import Container from "../components/container";

import { Box, Heading, Image, Button, Text } from "@chakra-ui/core";

const InterimPage: React.FC = ({ location }) => {
  return (
    <Simple title="Courier Starters">
      <Container>
        <Heading>Great! Let’s trigger your first notification.</Heading>
        <Text>Below is an example of how to talk to the Courier API.</Text>
        <Text>
          Press the ‘Run the Command’ button after you’ve given it a look.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/kickoff.png" width="600px" />
        </Box>
        <Button
          as={"a"}
          href={`https://wuphf.tk26.repl.co/inbound/lead?phone=${location.state.phone}`}
          px={8}
          py={4}
          mt={4}
          bg={"#2C1338"}
          border={"none"}
          borderRadius={"full"}
          textDecoration={"none"}
          px={8}
          py={0}
          color={"white"}
        >
          Run This Command
        </Button>
      </Container>
    </Simple>
  );
};

export default InterimPage;
