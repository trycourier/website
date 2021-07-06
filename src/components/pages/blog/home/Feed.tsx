import { Box } from "@chakra-ui/react";
import FeaturedBlock from "./FeaturedBlock";

const Feed = ({ feedContent }: { feedContent: any }) => (
  <Box
    w={{ base: "100%", xl: "80%" }}
    ml={{ base: 0, xl: "62px" }}
    p={{ base: "0 20px", xl: 0 }}
  >
    <FeaturedBlock items={feedContent.topFeatured} />
    <Box mt={{ base: "62px", md: "92px" }}>
      <FeaturedBlock items={feedContent.bottomFeatured} />
    </Box>
  </Box>
);

export default Feed;
