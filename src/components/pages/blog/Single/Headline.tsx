import { Tag, Heading, Flex } from '@chakra-ui/react';
import type { PostTags } from './index';

const Headline = ({title, tags}: {title: string, tags: PostTags}) => (
    <>
        <Flex mt={"32px"} mb={"22px"}>
            {
                tags.items.map(tag => (
                    <Tag color="#F19301" bg="#FDF4DD" p={2} fontSize="11px" fontWeight="500" mr={3} key={tag.name}>{tag.name.toUpperCase()}</Tag>
                ))
            }
        </Flex>
        <Heading variant="h2">{title}</Heading>
    </>      
);

export default Headline;