import { Flex, Box, Heading, Text, Avatar } from '@chakra-ui/react';
import ParseData from '../ParseData';
import InternalLink from 'components/InternalLink';
import BlogTag from '../../common/Tag';
import Image from 'next/image';

const Main = ({item}: {item:any}) => {
    const { tag, authorName, authorAvatar, slug, excerpt, title, pubDate, headerImageUrl, headerImageTitle} = ParseData({data: item});
    console.log(headerImageTitle);
    return (
        <Flex direction={{base: "column", lg: "row"}}>
            <Box sx={{
                'img': {
                    objectFit: "cover",
                    borderRadius: "12px" 
                },
                '@media screen and (max-width: 30em)': {
                    'img': {
                        width: "450px",
                        height: "250px"
                    }
                },
                '@media screen and (min-width: 30em) and (max-width: 48em)': {
                    'img': {
                        width: "717px",
                        height: "375px"
                    }
                }
            }}>
                <Image src={`https:${headerImageUrl}`} width={515} height={375} alt={headerImageTitle} />
            </Box>
            <Box ml={{base: 0, lg: 7}} mt={{base: 8, lg: 0}} w={{base: "100%", lg: "40%", xl: "35%"}}>
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