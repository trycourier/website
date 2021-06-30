import { Heading, Text, Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";


const Content = ({content, title}: {content: any[], title: string}) => {
    return (
        <Box mt={"52px"} color="secondary.dark" maxW={980} mx="auto" pt={{base: "132px", lg: "92px"}} p="0 20px">
            <Heading as='h1'>{title}</Heading>
            {
                content.map((row:any, contentsIndex) => {
                    const document = row;
                    return (
                        documentToReactComponents(document, {
                            renderMark: {
                                [MARKS.BOLD]: text => {
                                return <strong>{text}</strong>;
                                },
                            },
                            renderNode: {
                                [BLOCKS.HEADING_1]: (node, children) => <Heading as="h1" mt={"42px"} size="xl">{children}</Heading>,
                                [BLOCKS.HEADING_2]: (node, children) => <Heading as="h2" mt={"32px"} size="lg">{children}</Heading>,
                                [BLOCKS.HEADING_3]: (node, children) => <Heading as="h3" mt={"22px"} size="md">{children}</Heading>,
                                [BLOCKS.PARAGRAPH]: (node, children) => {
                                    return (
                                        <Text mt={6}>{children}</Text>
                                    )
                                },
                                [INLINES.HYPERLINK]: ({ data }, children) => (
                                    <a
                                      style={{textDecoration: "underline"}}
                                      href={data.uri}
                                      target={`${data.uri.includes("courier.com") ? '_self' : '_blank'}`}
                                      rel={`${data.uri.includes("courier.com") ? '' : 'noopener noreferrer'}`}
                                    >{children}</a>
                                  )
                            },
                        })
                    )
                })
            }
        </Box>     
    )
};

export default Content;