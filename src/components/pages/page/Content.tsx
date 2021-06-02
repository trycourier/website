import { Heading, Text, Box, Image, AspectRatio } from '@chakra-ui/react';

const YouTubeEmbed = ({embedUrl}: {embedUrl: string}) => {
    return (
        <AspectRatio maxH={"430px"} my={10} maxW={"90%"} mx="auto"
            sx={{
                borderRadius: "64px"
            }}>
            <iframe
            src={embedUrl}
            allowFullScreen
            style={{
                borderRadius: "12px"
            }}
        />
        </AspectRatio>
    )
}

function isBoldText({row} : {row: any}) {
    const isBold = row.marks.length > 0 && row.marks.filter((e:any) => e.type === "bold");
    return isBold
}

function getParagraphString({content}: {content:any[]}) {
    let allText = "";
    for (let index = 0; index < content.length; index++) {
        const row = content[index];
        if(row.nodeType === "text") {
            if(isBoldText({row})) {
                allText += `<strong>${row.value}</strong>`
            } else {
                allText += row.value;
            }
        }
        if(row.nodeType === "hyperlink") {
            const internalUrl = row.data.uri.includes("courier.com");
            allText += `<a href="${row.data.uri}" style="border-bottom: 1px #2C1338 dotted" target='${internalUrl ? "": "_blank"}' rel='${internalUrl ? "": "noopener noreferrer"}'>${row.content[0].value}</a>`;
        }
    }
    return allText;
}

const Content = ({content, title}: {content: any[], title: string}) => {
    return (
        <Box mt={"52px"} color="secondary.dark" maxW={980} mx="auto" pt={{base: "132px", lg: "92px"}} p="0 20px">
            <Heading as='h1'>{title}</Heading>
            {
                content.map((row:any, contentsIndex) => {
                    if(row.nodeType.startsWith("heading")) {
                        return (
                            <Box key={contentsIndex}>
                                {
                                    row.content.map((heading: any, index: any) => (
                                        <Heading as="h2" mt={contentsIndex == 0 ? "0": "42px"} key={heading.value + index}>{heading.value}</Heading>
                                    ))
                                }
                            </Box>
                        )
                    }

                    if(row.nodeType == "paragraph") {
                        const isYouTubeEmbed = row.content.find((item: any) => item.data.uri && item.data.uri.includes("youtube.com/embed"));
                        if(isYouTubeEmbed) {
                            return (<YouTubeEmbed embedUrl={isYouTubeEmbed.data.uri} />)
                        }
                        const allContent = getParagraphString({content: row.content});
                        return (
                            <Text mt={6} dangerouslySetInnerHTML={{__html: allContent}} />
                        )
                    }
                })
            }
        </Box>     
    )
};

export default Content;