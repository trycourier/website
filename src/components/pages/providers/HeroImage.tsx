import { Flex, Box } from "@chakra-ui/react";
import Container from "components/Container";
import Image from "next/image";

const HeroImage = () => (
  <Container maxWidth={1000}>
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      mt={"-290px"}
      justify="center"
      borderRadius="30px"
      sx={{
        backdropFilter: "blur(30px)",
      }}
    >
      <Box mt={"50px"}>
        <Image
          src={"/images/pages/integrations/providers/integrations-hero.png"}
          width={756}
          height={488}
          priority
        />
      </Box>
    </Flex>
  </Container>
);

export default HeroImage;
