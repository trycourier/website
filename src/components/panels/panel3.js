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
import { graphql, useStaticQuery } from "gatsby";
import Image from "../image";

const Panel3 = ({ ...props }) => {
  const {clientImage} = useStaticQuery(graphql`
      {
          clientImage: imageSharp(original: {src: {regex: "/bluecrew-guy/"}}) {
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
          Bluecrew
        </Heading>
        <List>
          <ListItem>
            Bluecrew is a two-sided staffing platform that makes it easy for
            employers to find and manage great hourly workers while giving job
            seekers access to jobs that fit their life, schedule and skills with
            top pay and benefits.
          </ListItem>
          <ListItem>
            Bluecrew hires more top hourly talent, fills jobs faster, and keeps
            employers updated across multiple channels with no-code
            notifications powered by Courier, Twilio and Segment.
          </ListItem>
        </List>

        <blockquote>
          "We were looking for a tool with an easy-to-use visual editor that
          we could hook up to our Segment events and would allow us to send
          multi-channel user notifications, without having to code or test
          anything. We thought this was a pipe dream – and then we found
          Courier."
          <br/>
          <br/>
          -Cooper Newby, CPO and Co-founder @ Bluecrew
        </blockquote>
      </Box>

      <Box w={"full"}  display={{base: "none", md: "block"}}  height={"100%"}>
        <Image image={clientImage} style={{height: '100%'}} objectFit={'contain'} />
      </Box>
    </SimpleGrid>
  );
};

export default Panel3;
