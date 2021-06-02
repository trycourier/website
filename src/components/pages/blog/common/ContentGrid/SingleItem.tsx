import { Box, Image, Heading, Text, Flex, Avatar } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';
import ParseData from '../../common/ParseData';
import BlogTag from '../../common/Tag';

const SingleItem = ({data}: {data: any}) => {
    const {id, tag, authorName, authorAvatar, thumbnailUrl, slug, excerpt, title, pubDate} = ParseData({data});
    return (
        <Box color="secondary.dark" key={id}>
            <Image src={thumbnailUrl} borderRadius="12px" height={{base: "250px", md: "270px"}} objectFit="cover" w={{base: "100%", md: "auto"}} mb={"32px"}/>
            <BlogTag tag={tag} />
            <InternalLink to={`/blog/${slug}`}>
                <Heading variant="subh1" mt={"12px"}>{title}</Heading>
            </InternalLink>
            <Text opacity="0.7" mt={2} variant="body3">
                {excerpt}
            </Text>
            <Flex mt={5} color="secondary.dark">
            <Avatar name={authorName} src={authorAvatar} height="40px" width="40px" />
            <Box ml={3}>
                <Text variant="body3">{authorName}</Text>
                <Text opacity="0.4" mt={0} variant='smallbody2'>{pubDate}</Text>
            </Box>
        </Flex>
        </Box>        
    )
};

export default SingleItem;