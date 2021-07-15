import { Box, Heading, Flex, Container } from "@chakra-ui/react";
import Image from "next/image";

import ycombinator from "../../../../public/images/investors/ycombinator.svg";
import matrixPartners from "../../../../public/images/investors/matrixPartners.svg";
import bessemerVenturePartners from "../../../../public/images/investors/bessemerVenturePartners.svg";
import slackFund from "../../../../public/images/investors/slackFund.svg";
import twilio from "../../../../public/images/investors/twilio.svg";

const images = [
  ycombinator,
  matrixPartners,
  bessemerVenturePartners,
  slackFund,
  twilio,
];

const Investors = () => (
  <Container maxW="container.xl">
    <Box
      mt={{ base: "60px", lg: "120px" }}
      mb={{ base: "20px", lg: "120px" }}
      pb="10px"
    >
      <Heading textAlign="center" as="h4" variant="h4">
        We are backed by great investors
      </Heading>

      <Flex opacity="0.5" justify="center" wrap="wrap" mt="64px">
        {images.map((image, index) => (
          <Box key={index} mx={{ base: "20px", lg: "43px" }} mb="40px">
            <Image layout="fixed" src={image} />
          </Box>
        ))}
      </Flex>
    </Box>
  </Container>
);

export default Investors;
