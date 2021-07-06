import { Box, Image } from "@chakra-ui/react";

const IconsRight = () => (
  <Box
    mt={{ base: 4, lg: 14 }}
    pr={{ base: "132px", md: "492px", lg: "750px", xl: "62px" }}
    position={{ base: "absolute", xl: "absolute" }}
    zIndex={3}
  >
    <Box display={{ md: "none", xl: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/cross.svg"}
        transform={"translate3d(28.25px, 35.15px, 0px)"}
        alignSelf="right"
        pl={{ base: "-43px", xl: "192px" }}
      />
    </Box>
    <Box>
      <Image
        src={"/images/pages/home/visual-editor/blurtext.svg"}
        transform={"translate3d(54.55px, 33.25px, 0px)"}
        textAlign="left"
        my={"62px"}
        pr={{ base: 0, xl: "1162px" }}
      />
    </Box>
    <Box display={{ md: "none", xl: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/blurcode.svg"}
        transform={"translate3d(24.35px, 14.55px, 0px)"}
        pl={{ base: 0, xl: "122px" }}
      />
    </Box>
    <Box display={{ base: "none", md: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/media.svg"}
        transform={"translate3d(19.8px, 15.55px, 0px)"}
        my={"62px"}
        pr={{ base: 0, xl: "1162px" }}
        pt={{ md: "132px", xl: 0 }}
      />
    </Box>
    <Box display={{ base: "none", md: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/quote.svg"}
        transform={"translate3d(53.1px, 35.45px, 0px)"}
        pl={{ base: 0, xl: "162px" }}
        pt={{ md: "92px", xl: 0 }}
      />
    </Box>
  </Box>
);

export default IconsRight;
