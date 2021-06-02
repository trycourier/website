import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import contents from './data';

const Content = ({slug}) => (
    <Box color="secondary.dark" maxW={980} mx="auto" pt={{base: "132px", lg: "92px"}} p="0 20px">
        {
            contents[slug].map(row, contentsIndex => {
                const key = Object.keys(row)[0];
                if(key == "h2") {
                    return (
                        <Heading mt={contentsIndex == 0 ? {base: "112px", lg: "62", xl: "92px"}: "42px"}>{row[key]}</Heading>
                    )
                }

                if(key == "h3") {
                    return (
                        <Heading mt={"32px"} 
                            fontSize="24px"
                            fontWeight="400"
                        >{row[key]}</Heading>
                    )
                }

                if(key == "p") {
                    return (<Text mt={6}>{row[key]}</Text>)
                }

                if(key == "ul") {
                    const list = row[key];
                    return (
                        <UnorderedList>
                            {
                                list.map(item => (
                                    <ListItem mt={3}>{item}</ListItem>
                                ))
                            }
                        </UnorderedList>
                    )
                }
            })
        }
    </Box>          
);

export default Content;