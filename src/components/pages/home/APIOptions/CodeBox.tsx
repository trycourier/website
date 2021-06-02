import { Box, Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import data from './data';

const CodeThing = ({data}: {data: string}) => (
    <Flex dangerouslySetInnerHTML={{ __html: data }} bg="#2D1339" color="white" overflowY="auto" sx={{
        "code": {display: "flex", fontFamily: "Poppins, sans-serif", fontSize: "13px"},
        "code:before": { width: "44px", counterIncrement: "line", content: "counter(line)", display: "inline-block", backgroundColor: "#1e0c26",
padding: "0 9px 0 0", marginRight: "16px", textAlign: "right", color: "#888",
position: "absolute", left: "0" },
        "pre": {counterReset: "line", position: "relative", whiteSpace: "nowrap", paddingLeft: "60px", lineHeight: "19px"}
    }} w={"100%"} h={"364px"} borderBottomRadius="16px" pt={8} />
);

const CodeBox = () => (    
    <Box w={{base: "100%", lg: "400px", xl: '55%'}} minW={{base: 0, md: "582px"}} mb={"92px"} mt={{base: "42px", lg: 0}} mr={{base: 0, lg: '62px'}} id="codeBox" position="relative">
        <Box position="absolute"  h={{base: "100%", lg: "80%", xl: "100%"}} w={"45px"} bg="#1e0c26" borderTopLeftRadius="16px" borderBottomLeftRadius="16px"/>
        <Tabs variant="unstyled">
            <TabList bg="#2D1339" borderTopRadius="16px" p="16px 0 0 60px" flexWrap="wrap">
                {
                    data.map(language => (
                        <Tab _selected={{ color: "white", bg: "linear-gradient(270deg,#9121c2,#ff5e5e)", opacity: "1" }} borderRadius="6px" h="32px" w="72px" fontSize="12px" fontWeight="600" color="white" opacity=".72" background="hsla(0,0%,100%,.08)" mr={3} mb={3} key={language.languageName}>{language.languageName}</Tab>   
                    ))
                }
            </TabList>
            <TabPanels>
                {
                    data.map(language => (
                        <TabPanel p="0" key={language.languageId}>
                            <CodeThing data={language.languageCode} />
                        </TabPanel>
                    ))
                }
            </TabPanels>
        </Tabs>
    </Box>
);

export default CodeBox;