import { Box } from "@chakra-ui/react";
import MainArticle from "../../common/FeaturedBlock/MainArticle";
import ContentGrid from "../ContentGrid";

const FeaturedBlock = ({ items }: { items: any[] }) => (
  <Box>
    <MainArticle item={items[0]} />
    <ContentGrid items={items.slice(1, 4)} />
  </Box>
);

export default FeaturedBlock;
