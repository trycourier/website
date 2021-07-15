import { Box, Flex } from "@chakra-ui/react";
import ViewAllPosts from "./ViewAllPosts";
import Headline from "./Headline";
import RichContent from "./RichContent";
import MarkdownContent from "./MarkdownContent";
import Author from "./Author";
import MoreFrom from "./MoreFrom";
import MostPopular from "./MostPopular";
import Newsletter from "components/pages/blog/common/Newsletter";
import SocialShare from "./SocialShare";
import Image from "next/image";

type HeaderImage = {
  title: string;
  url: string;
};

type PostTags = {
  items: [
    {
      name: string;
      slug: string;
    }
  ];
};

export type { PostTags };

type AuthorProps = {
  items: [
    {
      name: string;
      avatar: {
        url: string;
      };
    }
  ];
};

type ContentProps = {
  json: {
    content: any[];
  };
};

interface SingleBlogProps {
  headerImage?: HeaderImage;
  title: string;
  tagsCollection: PostTags;
  authorsCollection: AuthorProps;
  publishDate: Date;
  content: ContentProps;
  contentMd?: string;
  assets: Record<string, { url: string; width: number; height: number }>;
  images: object;
  snippets: object;
  slug: string;
  moreFromTagName: string;
  moreBlogs: any[];
  mostPopular: any[];
}

const SingleBlogContent = ({
  headerImage,
  title,
  tagsCollection,
  publishDate,
  authorsCollection,
  content,
  contentMd,
  assets,
  images,
  snippets,
  moreFromTagName,
  moreBlogs,
  mostPopular,
  slug,
}: SingleBlogProps) => (
  <Flex
    maxW={1240}
    mx="auto"
    pt={{ base: "132px", lg: "92px" }}
    p="0 20px"
    mt={{ base: "112px", lg: "62px", xl: "92px" }}
  >
    <MostPopular blogs={mostPopular} />
    <Box
      color="secondary.dark"
      w={{ base: "100%", xl: "70%" }}
      ml={{ base: 0, xl: 9 }}
    >
      <ViewAllPosts />
      {headerImage && (
        <Box
          mt={{ base: "32px", md: "42px", xl: "62px" }}
          borderRadius="16px"
          id="blog-header-image"
        >
          <Image
            src={`${headerImage.url}?w=1816`}
            layout="responsive"
            width={840}
            height={377}
            priority
            alt={headerImage.title}
          />
        </Box>
      )}
      <Headline title={title} tags={tagsCollection} />
      <Flex
        justify="space-between"
        align={{ base: "auto", md: "center" }}
        mt={8}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Author
          name={authorsCollection.items[0].name}
          avatar={authorsCollection.items[0].avatar.url}
          publishDate={publishDate}
        />
        <SocialShare slug={slug} title={title} />
      </Flex>
      {contentMd ? (
        <MarkdownContent assets={assets} content={contentMd} />
      ) : (
        <RichContent
          content={content.json.content}
          images={images}
          snippets={snippets}
        />
      )}
      <Box mt={{ base: "62px", md: "92px" }}>
        <Newsletter />
      </Box>
      <MoreFrom moreFromTagName={moreFromTagName} moreBlogs={moreBlogs} />
    </Box>
  </Flex>
);

export default SingleBlogContent;
