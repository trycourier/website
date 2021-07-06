import { Box, SimpleGrid } from "@chakra-ui/react";
import Logo from "components/Logo";
import TwitterIcon from "../Logos/Twitter";
import LinkedInIcon from "../Logos/LinkedIn";
import GitHubIcon from "../Logos/GitHub";
import YouTubeIcon from "../Logos/YouTube";
import TwitchIcon from "../Logos/Twitch";
import DiscordIcon from "../Logos/Discord";

const Social = () => {
  return (
    <Box>
      <Box pt={1}>
        <Logo />
      </Box>
      <SimpleGrid
        mt={"32px"}
        columns={{ base: 6, md: 6, lg: 2 }}
        spacing={{ base: 4, xl: 3 }}
      >
        <TwitterIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <YouTubeIcon />
        <TwitchIcon />
        <DiscordIcon />
      </SimpleGrid>
    </Box>
  );
};

export default Social;
