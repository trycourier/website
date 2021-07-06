import { Box } from "@chakra-ui/react";
import MainArticle from "../../common/FeaturedBlock/MainArticle";
import ContentGrid from "../ContentGrid";

const FeaturedBlock = ({ items }: { items: any[] }) => {
  const allBlogs = items;
  const featuredBlog = items[0];
  allBlogs.shift();
  const otherBlogs = allBlogs;

  return (
    <Box>
      <MainArticle item={featuredBlog} />
      <ContentGrid items={otherBlogs} />
    </Box>
  );
};

export default FeaturedBlock;
