import React, { useState } from 'react';
import { Box, Text, Divider, Spinner } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';

const hoverStyles = {
    background: "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
    "WebkitBackgroundClip": "text",
    "WebkitTextFillColor": "transparent", 
    width: "fit-content"
};  

const MostPopular = ({blogs}: {blogs: any[]}) => {
    const [ selectedPost, setSelectedPost ] = useState("");

    return (
        <Box color="secondary.dark" boxShadow='0 10px 30px rgb(0 0 0 / 8%)' h="fit-content" mt={"104px"} p={"36px"} borderRadius="16px" w={"27%"} display={{base: "none", xl: "block"}}>
            <Text fontSize="xl" fontWeight="600" pb={2}>Most Popular</Text>
            {
                blogs.map((menu, index) => (
                    <Box onClick={() => setSelectedPost(menu.title)}>
                        <InternalLink to={`/blog/${menu.slug}`}>
                            <Box variant="body3" borderRadius="6px" my={index <= 2 ? "22px": ""} mt={index === 3 ? "22px": "22px"}>
                                <Text sx={{
                                    '&': selectedPost === menu.title ? hoverStyles: {},
                                    ':hover': hoverStyles
                                }}>
                                    {menu.title}
                                    {
                                        selectedPost === menu.title &&
                                        <Spinner ml={2} size="xs" />
                                    }
                                </Text>
                            </Box>
                        </InternalLink>
                        {
                            index < 3 && <Divider />
                        }
                    </Box>
                ))
            }
        </Box>    
    )
};

export default MostPopular;