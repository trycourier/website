import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  BoxProps,
} from "@chakra-ui/react";

interface CodeBoxProps extends BoxProps {
  examples: { language: string; code: string }[];
}

const CodeBox = ({ examples, ...props }: CodeBoxProps) => (
  <Box id="codeBox" position="relative" {...props}>
    <Box
      position="absolute"
      h="100%"
      w="45px"
      bg="#1e0c26"
      borderTopLeftRadius="16px"
      borderBottomLeftRadius="16px"
    />
    <Tabs variant="unstyled" h="100%" display="flex" flexDir="column">
      <TabList
        bg="#2D1339"
        borderTopRadius="16px"
        p="16px 0 0 60px"
        flexWrap="wrap"
      >
        {examples.map((example) => (
          <Tab
            _selected={{
              color: "white",
              bg: "linear-gradient(270deg,#9121c2,#ff5e5e)",
              opacity: "1",
            }}
            borderRadius="6px"
            h="32px"
            fontSize="12px"
            fontWeight="600"
            color="white"
            opacity=".72"
            background="hsla(0,0%,100%,.08)"
            mr={3}
            mb={3}
            key={example.language}
          >
            {example.language}
          </Tab>
        ))}
      </TabList>
      <TabPanels flex="1" minH={0}>
        {examples.map((example) => (
          <TabPanel p="0" h="100%" key={example.language}>
            <Flex
              dangerouslySetInnerHTML={{ __html: example.code }}
              bg="#2D1339"
              color="white"
              overflowY="auto"
              sx={{
                code: {
                  display: "flex",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                },
                "code:before": {
                  width: "44px",
                  counterIncrement: "line",
                  content: "counter(line)",
                  display: "inline-block",
                  backgroundColor: "#1e0c26",
                  padding: "0 9px 0 0",
                  marginRight: "16px",
                  textAlign: "right",
                  color: "#888",
                  position: "absolute",
                  left: "0",
                },
                pre: {
                  counterReset: "line",
                  position: "relative",
                  whiteSpace: "nowrap",
                  paddingLeft: "60px",
                  lineHeight: "19px",
                },
              }}
              w="100%"
              h="100%"
              borderBottomRadius="16px"
              pt={8}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  </Box>
);

export default CodeBox;
