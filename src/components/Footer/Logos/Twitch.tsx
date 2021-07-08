import { Icon, Flex } from "@chakra-ui/react";
import ExternalLink from "components/ExternalLink";
import { twitch } from "constants/urls";

const TwitchIcon = () => (
  <ExternalLink to={twitch}>
    <Flex
      bg="hsla(0,0%,100%,.08)"
      align="center"
      justify="center"
      borderRadius="6px"
      h="40px"
      w="40px"
    >
      <Icon width="20px" height="22px" viewBox="0 0 20 22" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.40627 0.531738L0 4.12504L0 18.8123H4.99957L4.99957 21.4687H7.8121L10.4685 18.8123L14.5311 18.8123L20 13.3434L20 0.531738L1.40627 0.531738V0.531738ZM18.1244 12.4065L14.9996 15.5313H10L7.34364 18.1877V15.5313L3.12484 15.5313L3.12484 2.40647L18.1244 2.40647L18.1244 12.4065ZM14.9996 6.00065L14.9996 11.4634H13.1249L13.1249 6.00065L14.9996 6.00065ZM10 6.00065L10 11.4634H8.12528L8.12528 6.00065L10 6.00065Z"
          fill="white"
        />
      </Icon>
    </Flex>
  </ExternalLink>
);

export default TwitchIcon;
