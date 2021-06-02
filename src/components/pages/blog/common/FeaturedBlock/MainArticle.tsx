import { Flex, Image, Box, Heading, Text, Avatar } from '@chakra-ui/react';
import ParseData from '../ParseData';
import InternalLink from 'components/InternalLink';
import BlogTag from '../../common/Tag';

const Main = ({item}: {item:any}) => {
    const { tag, authorName, authorAvatar, slug, excerpt, title, pubDate, headerImageUrl} = ParseData({data: item});

    return (
        <Flex direction={{base: "column", lg: "row"}}>
            <Image src={headerImageUrl} w={{base: "100%", lg: "515px"}} h={{base: "250px", md: "375px"}} objectFit="cover" borderRadius="12px" mx={{base: "auto", lg:""}} />
            <Box ml={{base: 0, lg: 7}} mt={{base: 8, lg: 0}}>
                <BlogTag tag={tag} />
                <InternalLink to={`/blog/${slug}`}>
                    <Heading variant="h4" lineHeight="38px" mt={"12px"}>{title}</Heading>
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
        </Flex>        
    )
};

export default Main;