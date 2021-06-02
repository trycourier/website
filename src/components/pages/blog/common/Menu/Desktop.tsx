import { Box, Text } from '@chakra-ui/react';
import SearchButton from './SearchButton';
import InternalLink from 'components/InternalLink';

const Desktop = ({data, slug} : {data: any[], slug: string}) => (
        <Box color="secondary.dark" boxShadow='0 10px 30px rgb(0 0 0 / 8%)' p={"20px 20px"} h="fit-content">
        {
            data.map((menu, index) => (
                <InternalLink to={menu.slug === "home" ? `/blog`: `/blog/tags/${menu.slug}`}>
                    <Box py="10px" bg={slug == menu.slug ? "#F7F6F7" : "#FFF"} variant="body3" pl={"20px"}>
                        <Text sx={{
                            '&': slug == menu.slug ? {
                                background: "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
                                "WebkitBackgroundClip": "text",
                                "WebkitTextFillColor": "transparent", width: "fit-content"} : {}
                        }}>
                            {menu.name}
                        </Text>
                        </Box>
                    </InternalLink>
            ))
        }
    </Box>        
)

export default Desktop;