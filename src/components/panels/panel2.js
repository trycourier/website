import React from "react";
import t from "prop-types";
import { Box, Button, Heading, List, ListItem, SimpleGrid } from "@chakra-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../image";
import expel from '../../images/clients/expel.svg'
const Panel2 = ({ ...props }) => {

  const {clientImage} = useStaticQuery(graphql`
      {
          clientImage: imageSharp(original: {src: {regex: "/-guy/"}}) {
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
      py={[6, , 10]}
      px={[4, , 130]}
      minH={400}
    >
      <Box>
        <Heading color={"textPrimary"} mt={0}>
          Expel
        </Heading>
        <List>
          <ListItem>
            Expel is a B2B Security Operations Center (SOC) as a service
            platform that provides transparent managed security.
          </ListItem>
          <ListItem>
            Expel alerts their customers about critical security threats 24/7
            with multi-channel notifications over Slack, Microsoft Teams, and
            email, all powered by Courier.
          </ListItem>
        </List>
      </Box>
      <Box w={"full"} height={"100%"} display={{base: "none", md: "flex"}} justifyContent={'center'} alignItems={'baseline'} pt={20}>
        <img src={expel} />
      </Box>
    </SimpleGrid>
  );
};

export default Panel2;
