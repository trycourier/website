import { Box } from "@chakra-ui/react";
import DesktopMenu from "./Desktop";
import MobileMenu from "./Mobile";
import data from "./data";

const Menu = ({ slug }: { slug: string }) => (
  <>
    <Box display={{ base: "none", xl: "block" }} w={"25%"}>
      <DesktopMenu data={data} slug={slug} />
    </Box>
    <Box display={{ base: "block", xl: "none" }}>
      <MobileMenu data={data} />
    </Box>
  </>
);

export default Menu;
