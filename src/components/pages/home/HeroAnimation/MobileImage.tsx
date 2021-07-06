import { Box } from "@chakra-ui/react";
import Image from "next/image";
import HeroMobileImage from "../../../../../public/images/pages/home/hero/mobile-static.png";

const HomeHeroMobileImage = () => (
  <Box
    display={{ base: "block", xl: "none" }}
    mx="auto"
    mt={{ base: "-180px", xl: "-500px" }}
    padding="0 20px"
  >
    <Image src={HeroMobileImage} />
  </Box>
);

export default HomeHeroMobileImage;
