import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import YCombinatorImage from "../../../../../public/images/investors/ycombinator.svg";
import SlackFundImage from "../../../../../public/images/investors/slackFund.svg";
import TwilioImage from "../../../../../public/images/investors/twilio.svg";

const BackedByImage = ({
  imgSrc,
  altTag,
}: {
  imgSrc: StaticImageData;
  altTag: string;
}) => (
  <Box opacity="0.5">
    <Image src={imgSrc} alt={altTag} />
  </Box>
);

const Investors = () => (
  <Box bg="rgba(44, 19, 56, 0.04)" mt={"52px"} borderRadius="16px">
    <SimpleGrid
      columns={{ base: 2, md: 4 }}
      spacingX={{ base: "82px", md: 12, lg: 6, xl: 10 }}
      spacingY={{ base: 10, lg: 0 }}
      align="center"
      maxW={{ lg: 900, xl: 1024 }}
      p={6}
    >
      <Text
        color="secondary.dark"
        opacity="0.5"
        fontWeight="700"
        fontSize="18px"
        fontFamily="Gellix"
      >
        BACKED BY
      </Text>
      <BackedByImage imgSrc={YCombinatorImage} altTag={"Y Combinator"} />
      <BackedByImage imgSrc={SlackFundImage} altTag={"Slack Fund"} />
      <BackedByImage imgSrc={TwilioImage} altTag={"Twilio"} />
    </SimpleGrid>
  </Box>
);

export default Investors;
