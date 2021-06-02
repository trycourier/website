import { Flex, Text } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';
import { terms, privacy, disclosure, subprocessors } from 'constants/urls';

const menuData = [
    {
        title: "Terms",
        link: terms
    },
    {
        title: "Privacy",
        link: privacy
    },
    {
        title: "Responsible Disclosure",
        link: disclosure
    },
    {
        title: "Subprocessors",
        link: subprocessors
    }
];

const FooterCredit = () => (
    <Flex p='88px 0 23px' maxW={1240} pl={{base: 0, xl: "92px"}} direction={{base: "column-reverse", lg: "row"}} color="white" flexWrap="wrap" justify={{base: "flex-end", lg: "flex-start"}}>
        <Text variant='smallbody2' opacity='0.48'>© 2021 Courier. All rights reserved.</Text>
        <Flex ml={{base: 0, lg: "82px"}} flexWrap="wrap">
            {
                menuData.map(menu => (
                    <InternalLink to={menu.link} key={menu.title}>
                        <Text variant='smallbody2' opacity='0.8' pr={{base: 5, lg: '48px'}} mb={4}>{menu.title}</Text>
                    </InternalLink>
                ))
            }
        </Flex>
    </Flex>      
);

export default FooterCredit;