import { SimpleGrid, Box } from '@chakra-ui/react';
import linkMenus from './data';
import FooterLinksMenu from './FooterLinksMenu';

const OtherFooterMenus = () => (
    <SimpleGrid ml={{base: 0, lg: "92px", xl: "192px"}} columns={{base: 2, md: 4}} spacingX={{base: 16, lg: "72px", xl: "92px"}} mt={{base: "62px", lg: 0}} spacingY={{base: 16, md: 0}}>
        {
            linkMenus.map(menu => (
                <Box key={menu.title}>
                    <FooterLinksMenu title={menu.title} items={menu.items} />
                </Box>
            ))
        }
    </SimpleGrid>      
);

export default OtherFooterMenus;