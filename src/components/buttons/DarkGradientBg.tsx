import { Flex } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';

interface Props {
    children: React.ReactNode,
    height: string | object,
    width: string | object,
    link: string,
    [x:string]: any
}

const DarkGradientBg = ({width, height, link, children, ...other}: Props) => (
    <InternalLink to={link}>
        <Flex 
            background="linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)" 
            color="#FFFFFF" 
            borderRadius="8px" 
            fontSize="14px" {...other} 
            _hover={{background: "linear-gradient(90deg, #9121C2 0%, #FF5E5E 100%)", transition: "all .8s"}} 
            width={width} 
            height={height} 
            textShadow="0 -1px 0 rgb(0 0 0 / 12%)" 
            boxShadow="0 2px 0 rgb(0 0 0 / 2%)" 
            fontWeight="600" 
            justify="center" 
            align="center"
            transition="all .8s"
        >
            {children}
        </Flex> 
    </InternalLink>           
);

export default DarkGradientBg;