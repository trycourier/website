import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import Image from "./image";
import colors from "../colors";
import { Box, Button, Grid, List, Text, Heading } from "@chakra-ui/core";

// was going to make this a reusable compoenent but didn't really make sense with hardcoded pages... leaving as is for the sake of timee

const FeatureGridText = styled(Box)<{ imageFirst: boolean }>`
  ${tw`mx-auto md:pr-8 mt-8`}
  ${(props) => (props.imageFirst ? tw`md:pl-8` : tw`md:pr-8`)}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl mb-2`}
    font-weight: 200;
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-lg`}
    color: ${colors.textSecondary};
  }
  text-align: right;
  max-width: 514px;
  
`;

const FeatureGridComponent: React.FC<{ imageFirst: boolean }> = ({
  imageFirst = true,
}) => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "CourierAP.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Grid
      templateColumns={{ md: "repeat(2, 1fr)", sm: "repeat(1,1fr)" }}
      gap={12}
      px={[4, 0]}
      pb={8}
    >
      <Box mt={{ small: "0", md: -140 }}>
        <Image image={img} />
        <Text textAlign={"center"} fontWeight={"bold"}>
          More Integrations
        </Text>
      </Box>
      <FeatureGridText imageFirst={imageFirst}>
        <Heading  >Any channel, one API</Heading>
        <p>
          Send over any channel and any provider with one API.

          Need to add a new channel? Integrate it in minutes – and without shipping any code.
        </p>
        <Button
          as={'a'}
          href={'https://www.trycourier.app/register/email'}
          px={8}
          py={4}
          mt={4}
          bg={"#D5EEE9"}
          border={"none"}
          borderRadius={"full"}
          textDecoration={'none'}
          px={8}
          py={0}
          color={'textPrimary'}
        >
          Sign Up
        </Button>
      </FeatureGridText>


    </Grid>
  );
};

export default FeatureGridComponent;
