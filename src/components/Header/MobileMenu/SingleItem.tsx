import MetaLink from 'components/MetaLink';
import { Box, AccordionItem, AccordionButton, Heading } from '@chakra-ui/react';

interface SingleItemProps {
    title: string;
    link: string;
    key: string;
}

const SingleItemMobileMenu = ({title, link, key}: SingleItemProps) => (
    <MetaLink to={link} linkType={'internal'}>
        <AccordionItem borderTop={title == "Features" ? "none": "auto"} borderBottom={title === "Pricing" ? "none": "auto"} key={title} p={title == "Features" ? "0px 0 20px": "28px 0 20px"}>
            <AccordionButton pt={0} _hover={{backgroundColor: "#FFFFFF"}}>
                <Box flex="1" textAlign="left" >
                    <Heading variant="h4" width="fit-content" color="secondary.dark">
                        {title}
                    </Heading>
                </Box>
            </AccordionButton>
        </AccordionItem>
    </MetaLink>
)

export default SingleItemMobileMenu;