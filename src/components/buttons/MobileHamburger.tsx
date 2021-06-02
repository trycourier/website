import { Box, Flex } from '@chakra-ui/react';

interface Props {
    height: string | object,
    width: string | object,
    stickyHeader: boolean
    [x:string]: any
}

const HamburgerButton = ({width, height, stickyHeader, ...other}: Props) => (
        <Box 
            background="linear-gradient(119.01deg,hsla(0,0%,100%,.5) -91.42%,hsla(0,0%,100%,0) 124.02%)" 
            color="primary.violet" 
            borderRadius="8px" 
            cursor="pointer"
            fontSize="14px" {...other} 
            _hover={{transition: "all .8s", opacity: "0.8"}} 
            width={width} 
            height={height} 
            textShadow="0 -1px 0 rgb(0 0 0 / 12%)" 
            boxShadow="0 2px 0 rgb(0 0 0 / 2%)" 
            fontWeight="600" 
            justify="center" 
            align="center"
            transition="all .8s"
        >
            <Flex alignItems="center" direction="column">
                <Box borderRadius="100px" width="20px" height="2px" bg={stickyHeader ? "secondary.dark": "#FFF"} mb={"5px"} mt={"8px"} />
                <Box borderRadius="100px" width="20px" height="2px" bg={stickyHeader ? "secondary.dark": "#FFF"} mb={"5px"} />
                <Box borderRadius="100px" width="20px" height="2px" bg={stickyHeader ? "secondary.dark": "#FFF"} />
            </Flex>
        </Box>          
);

export default HamburgerButton;