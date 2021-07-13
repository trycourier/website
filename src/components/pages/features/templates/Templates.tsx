import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

import templates from "../../../../../public/images/pages/features/templates/templates.png";

const Templates = () => (
  <Box py={{ base: "60px", lg: "120px" }}>
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Image
          src={templates}
          width={677}
          height={516.5}
          alt="Template Samples"
        />
      }
      tag={{
        label: "Templates",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Infinite templates for all of your cases
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Courier Templates allow you deliver the same message, with the same
          data, to multiple channels. Buttons, links, text, and more are
          auto-formatted for each particular channel.
        </Text>
        <UnorderedList mt={4} ml={7} color="secondary.darkAlpha">
          <ListItem>
            <Text variant="body1">edit once and update everywhere</Text>
          </ListItem>
          <ListItem>
            <Text variant="body1">
              Studio allows anyone to update templates without the need to write
              code
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </FeatureSection>
  </Box>
);

export default Templates;
