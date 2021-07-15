import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import InternalLink from "components/InternalLink";
import Logo from "components/Logo";

import { getStarted } from "constants/urls";

import notifications from "../../../../public/images/notifications.png";

const Graphic = () => (
  <Box
    flex={1}
    minW={0}
    bgImage="url('/banner-pattern.svg'),linear-gradient(229.33deg, #9121C2 -12.83%, #FF5E5E 115.1%)"
    bgRepeat="no-repeat"
    bgSize="cover"
    bgPos="center"
    color="white"
  >
    <Container h="100%" display="flex" flexDir="column">
      <Box mt={6} mb={{ base: 6, lg: "110px" }}>
        <InternalLink to={getStarted}>
          <Logo />
        </InternalLink>
      </Box>

      <Box flex={1} mb={{ base: 8, lg: "95px" }}>
        <Heading as="h1" variant="h2" mb={6}>
          Request A Demo
        </Heading>
        <Text variant="body2">With Courier you can:</Text>
        <UnorderedList ml={7}>
          <ListItem>
            <Text variant="body2">
              Programmatically deliver notifications across any channel
            </Text>
          </ListItem>
          <ListItem>
            <Text variant="body2">
              Edit notification templates without touching code
            </Text>
          </ListItem>
          <ListItem>
            <Text variant="body2">Create powerful routing and workflow rules</Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box display={{ base: "none", lg: "flex" }}>
        <Image
          src={notifications}
          width={515}
          height={365.5}
          alt="Email & push notification"
        />
      </Box>
    </Container>
  </Box>
);

export default Graphic;
