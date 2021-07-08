import { Icon, Flex } from "@chakra-ui/react";
import ExternalLink from "components/ExternalLink";
import { linkedin } from "constants/urls";

const LinkedInIcon = () => (
  <ExternalLink to={linkedin}>
    <Flex
      bg="hsla(0,0%,100%,.08)"
      align="center"
      justify="center"
      borderRadius="6px"
      h="40px"
      w="40px"
    >
      <Icon width="20px" height="20px" viewBox="0 0 20 20" fill="none">
        <path
          d="M4.15 2.08333C4.15 3.23417 3.225 4.16667 2.08333 4.16667C0.941667 4.16667 0.0166667 3.23417 0.0166667 2.08333C0.0166667 0.933333 0.941667 0 2.08333 0C3.225 0 4.15 0.933333 4.15 2.08333ZM4.16667 5.83333L0 5.83333L0 19.1667H4.16667L4.16667 5.83333ZM10.8183 5.83333L6.67833 5.83333L6.67833 19.1667H10.8192L10.8192 12.1675C10.8192 8.27583 15.8433 7.9575 15.8433 12.1675L15.8433 19.1667H20L20 10.7242C20 4.1575 12.565 4.39667 10.8183 7.62917V5.83333Z"
          fill="white"
        />
      </Icon>
    </Flex>
  </ExternalLink>
);

export default LinkedInIcon;
