import { Flex } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';

interface Props {
    children: React.ReactNode,
    height: string | object,
    width: string | object,
    link: string,
    [x:string]: any
}

const WhiteBgSimple = ({width, height, link, children, ...other}: Props) => (
    <InternalLink to={link}>
        <Flex 
            background="rgba(255, 255, 255, 0.16)" 
            borderRadius="8px" 
            color="white"
            border="2px solid #FFFFFF"
            fontWeight="600"
            fontSize="14px" 
            _hover={{transition: "all .8s", background: "hsla(0,0%,100%,.4)!important"}} 
            width={width} 
            height={height} 
            textShadow="0 -1px 0 rgb(0 0 0 / 12%)" 
            boxShadow="0 2px 0 rgb(0 0 0 / 2%)" 
            justify="center" 
            align="center"
            transition="all .8s"
        >
            {children}
        </Flex> 
    </InternalLink>           
);

export default WhiteBgSimple;