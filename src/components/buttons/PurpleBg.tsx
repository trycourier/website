import { Flex } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';

interface Props {
    children: React.ReactNode,
    height: string | object,
    width: string | object,
    link?: string,
    [x:string]: any
}

//TODO: Fix linking bit [isolate]

const PurpleBg = ({width, height, link, children, ...other}: Props) => {
    return (
        <>
            { link ?
            <InternalLink to={link}>
                <Flex 
                    background="linear-gradient(270deg, #9121C2 99.83%, #FF5E5E 155.77%)" 
                    color="#FFFFFF" 
                    borderRadius="8px" 
                    fontSize="14px" {...other} 
                    _hover={{background: "#791eb3"}} 
                    width={width} 
                    height={height} 
                    textShadow="0 -1px 0 rgb(0 0 0 / 12%)" 
                    boxShadow="0 2px 0 rgb(0 0 0 / 5%)" 
                    fontWeight="600" 
                    justify="center" 
                    align="center"
                >
                    {children}
                </Flex> 
            </InternalLink> :
             <Flex 
                background="linear-gradient(270deg, #9121C2 99.83%, #FF5E5E 155.77%)" 
                color="#FFFFFF" 
                borderRadius="8px" 
                fontSize="14px" {...other} 
                _hover={{background: "#791eb3"}} 
                width={width} 
                height={height} 
                textShadow="0 -1px 0 rgb(0 0 0 / 12%)" 
                boxShadow="0 2px 0 rgb(0 0 0 / 5%)" 
                fontWeight="600" 
                justify="center" 
                align="center"
            >
                {children}
            </Flex>
            }    
        </>   
    )
};

export default PurpleBg;