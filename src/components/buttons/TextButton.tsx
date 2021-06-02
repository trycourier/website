import { Text, Flex } from '@chakra-ui/react';
import RightArrow from 'components/icons/RightArrow';

interface Props {
    children: React.ReactNode,
}

const TextButton = ({children}: Props) => {
    return (
        <Flex align="center" sx={{
            ":hover p": {
                backgroundImage: "linear-gradient(270deg, #9121C2 -119.03%, #FF5E5E 8.24%, #9121C2 50.97%, #FF5E5E 91.41%)",
                transition: "all .3s ease-in-out",
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent"
            },
            ":hover svg": {
                transform: "translateX(3px)",
                transition: "all .3s ease-in-out",
                color: "#9121C2"
            },
            ":not(:hover) p, :not(:hover) svg": {
                transition: "all .3s ease-in-out"
            },
        }}>
            <Text fontSize="14px" color='secondary.dark' lineHeight="22px" fontWeight="600" mr={4} pb={"2px"} 
            transition="all .3s ease-in-out">
                {children}
            </Text>
            <RightArrow />
        </Flex>
    )
}

export default TextButton
