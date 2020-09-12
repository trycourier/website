import React from "react";
import t from "prop-types";
import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/core";

const Panel3 = ({ ...props }) => {
  return (
    <SimpleGrid
      maxW={1280}
      columns={[1, 2]}
      mx={"auto"}
      py={[6, , 10]}
      px={[4, , 130]}
    >
      <Box>
        <Heading color={"textPrimary"} mt={0}>
          Lorem ipsum
        </Heading>
        <List>
          <ListItem>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </ListItem>
        </List>

      </Box>
      <Box bg={"berry"} w={"full"} height={"100%"}></Box>
    </SimpleGrid>
  );
};

export default Panel3;
