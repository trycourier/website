import { Text, Heading, Box, SimpleGrid } from '@chakra-ui/react';
import MetaLink from 'components/MetaLink';

interface Items {
    link: string;
    linkType?: string;
    title: string
}

interface Props {
    title: string;
    items: Items[];
}

const LinkMenu = ({title, items}: Props) => (
    <Box>
        <Heading variant='subh1'>{title}</Heading>
        <SimpleGrid mt={'32px'} spacingY={3}>
        {
            items.map(item => (
                <MetaLink to={item.link} linkType={item.linkType ? item.linkType: "internal"} key={item.title}>
                    <Text color='hsla(0,0%,100%,.8)' variant='body3'>{item.title}</Text>
                </MetaLink>
            ))
        }
        </SimpleGrid>
    </Box>
)

export default LinkMenu;
