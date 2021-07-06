import { Box, Image } from "@chakra-ui/react";

const IconsRight = () => (
  <Box
    mt={{ base: 4, lg: 14 }}
    pl={{ base: "132px", md: "492px", lg: "650px", xl: "62px" }}
    position={{ base: "absolute", xl: "absolute" }}
  >
    <Box>
      <Image
        src={"/images/pages/home/visual-editor/blurmedia.svg"}
        transform={"translate3d(28.25px, 35.15px, 0px)"}
        alignSelf="right"
        pl={{ base: 0, xl: "1162px" }}
      />
    </Box>
    <Box display={{ md: "none", xl: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/markdown.svg"}
        transform={"translate3d(54.55px, 33.25px, 0px)"}
        textAlign="left"
        my={"62px"}
        pl={{ base: 0, xl: "962px" }}
      />
    </Box>
    <Box>
      <Image
        src={"/images/pages/home/visual-editor/blurquote.svg"}
        transform={"translate3d(24.35px, 14.55px, 0px)"}
        pl={{ base: 0, xl: "1162px" }}
        pt={{ md: "92px", xl: 0 }}
      />
    </Box>
    <Box display={{ base: "none", md: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/code.svg"}
        transform={"translate3d(19.8px, 15.55px, 0px)"}
        my={"62px"}
        pl={{ base: 0, xl: "962px" }}
        pr={{ md: "62px", lg: "192px", xl: 0 }}
      />
    </Box>
    <Box display={{ base: "none", md: "block" }}>
      <Image
        src={"/images/pages/home/visual-editor/text.svg"}
        transform={"translate3d(53.1px, 35.45px, 0px)"}
        pl={{ base: 0, xl: "1162px" }}
        pt={{ md: "62px", xl: 0 }}
      />
    </Box>
  </Box>
);

export default IconsRight;
