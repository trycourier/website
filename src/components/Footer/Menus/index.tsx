import { Flex, Box } from '@chakra-ui/react';
import Social from './Social';
import Other from './Other/index';

const Menus = ({...other}) => {
    return (
        <Box color='white' maxW={{base: "100%", xl: 1240}} mt={{base: "62px", lg: '112px'}} {...other} >
            <Flex flexWrap="wrap" pl={{base: 0, xl: "92px"}}>
                <Social />
                <Other />
            </Flex>
        </Box>
    )
}

export default Menus;
