import { Box, Heading, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import PurpleBgButton from "components/buttons/PurpleBg";
import RightArrow from "components/icons/RightArrow";

import { careers } from "constants/urls";

import photo1 from "../../../../public/images/pages/about/work-with-us/photo1.png";
import photo2 from "../../../../public/images/pages/about/work-with-us/photo2.png";
import photo3 from "../../../../public/images/pages/about/work-with-us/photo3.png";
import photo4 from "../../../../public/images/pages/about/work-with-us/photo4.png";

const floatingPhotos = [
  { image: photo1, top: -35, left: -280 },
  { image: photo2, top: 163, left: -140 },
  { image: photo3, top: -23, right: -260 },
  { image: photo4, top: 216, right: -80 },
];

const WorkWithUs = () => (
  <Box
    bgColor="primary.sand"
    color="secondary.dark"
    textAlign="center"
    mb="-156px"
  >
    <Container pos="relative" pt="104px" pb="152px" centerContent>
      <Heading variant="h2">Work with us</Heading>

      <Text variant="body1" mt={4} mb={12}>
        Help us improve software to human communication.
      </Text>

      <PurpleBgButton width="192px" height="50px" link={careers}>
        <Text mr="14px">View Open Roles</Text> <RightArrow />
      </PurpleBgButton>

      {floatingPhotos.map((photo, index) => (
        <Box
          key={index}
          display={{ base: "none", md: "flex" }}
          position="absolute"
          top={`${photo.top}px`}
          left={photo.left == null ? undefined : `${photo.left}px`}
          right={photo.right == null ? undefined : `${photo.right}px`}
          p={2}
          borderRadius={22}
          bgColor="white"
        >
          <Box borderRadius={16} overflow="hidden" display="flex">
            <Image
              layout="fixed"
              src={photo.image}
              width={photo.image.width / 2}
              height={photo.image.height / 2}
            />
          </Box>
        </Box>
      ))}
    </Container>
  </Box>
);

export default WorkWithUs;
