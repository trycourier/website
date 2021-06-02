import { Box, Image } from '@chakra-ui/react';
import ViewAllPosts from './ViewAllPosts';
import Headline from './Headline';
import Content from './Content';
import Author from './Author';
import MoreFrom from './MoreFrom';

type HeaderImage = {
    title: string;
    url: string;
}

type PostTags = {
    items: [{
        name: string;
        slug: string;
    }]
}

export type { PostTags }

type AuthorProps = {
    items:[{
        name: string;
        avatar: {
            url: string
        }
    }]
}

type ContentProps = {
    json: {
        content: any[]
    }
};

interface SingleBlogProps {
    headerImage: HeaderImage;
    title: string;
    tagsCollection: PostTags;
    authorsCollection: AuthorProps;
    publishDate: Date;
    content: ContentProps;
    images: object;
    slug: string
    moreFromTagName: string;
    moreBlogs: any[]
}

const SingleBlogContent = ({headerImage, title, tagsCollection, publishDate, authorsCollection, content, images, moreFromTagName, moreBlogs}: SingleBlogProps) => (
    <Box color="secondary.dark" maxW={980} mx="auto" pt={{base: "132px", lg: "92px"}} p="0 20px">
        <ViewAllPosts />
        <Image src={headerImage.url} borderRadius="16px" mt={"62px"}/>
        <Headline title={title} tags={tagsCollection} />
        <Author name={authorsCollection.items[0].name} avatar={authorsCollection.items[0].avatar.url} publishDate={publishDate} />
        <Content content={content.json.content} images={images} />
        <MoreFrom moreFromTagName={moreFromTagName} moreBlogs={moreBlogs} />
    </Box>          
);

export default SingleBlogContent;