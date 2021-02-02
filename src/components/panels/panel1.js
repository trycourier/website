import React from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/core";
import { useStaticQuery, graphql } from "gatsby"

import Image from "../image";

const Panel1 = ({ ...props }) => {
  const {clientImage} = useStaticQuery(graphql`
      {
          clientImage: imageSharp(original: {src: {regex: "/lattice-guy/"}}) {
              id
              fluid {
                  src
              }
          }
      }
  `)
  return (
    <SimpleGrid
      maxW={1280}
      columns={[1, 2]}
      mx={"auto"}
      py={[6, undefined, 10]}
      px={[4, undefined, 130]}
      minH={400}
    >
      <Box pr={4}>
        <Heading color={"textPrimary"} mt={0} >
          Lattice
        </Heading>
        <List>
          <ListItem>
            Lattice is a people management platform that helps companies develop
            engaged & high-performing teams.
          </ListItem>
          <ListItem>
            Lattice keeps managers and teams connected and focused on their
            goals with multi-channel notifications (Slack, Microsoft Teams,
            email and mobile push) powered by Courier.
          </ListItem>

        </List>
        <blockquote>
          “We were building out a new team to focus entirely on our
          notification infrastructure when we found Courier. Now we support
          even more channels with one line of code – and our product managers
          & designers can design the templates without engineering help.”
          <br/>
          <br/>
          - Eric Koslow, CTO & Co-Founder @ Lattice
        </blockquote>
      </Box>
      <Box w={"full"} height={"100%"}  display={{base: "none", md: "block"}} >
        <Image image={clientImage} style={{height: '100%'}} objectFit={'contain'} />
      </Box>
    </SimpleGrid>
  );
};

export default Panel1;
