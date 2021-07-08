import { Text, Heading, Box, Flex, Tag } from "@chakra-ui/react";
import TickMark from "components/icons/TickMark";
import data from "../data";

interface RightTextProps {
  children: React.ReactNode;
  rowIndex: number;
}

const RightText = ({ children, rowIndex }: RightTextProps) => {
  if (children === "nodata") {
    return (
      <Box
        bg="rgba(44,19,56,.16)"
        width="10px"
        height="2px"
        borderRadius="10px"
        verticalAlign="center"
      />
    );
  } else if (children === "selected" && rowIndex === 1) {
    return <TickMark gradient />;
  } else if (children === "selected" && rowIndex != 1) {
    return <TickMark gradient={false} />;
  } else if (rowIndex === 1) {
    return (
      <Text
        variant="body3"
        background="linear-gradient(270deg,#9121c2,#ff5e5e)"
        sx={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          maxW: "fit-content",
        }}
      >
        {children}
      </Text>
    );
  } else {
    return <Text variant="body3medium">{children}</Text>;
  }
};

const CompareTable = () => (
  <Box color="secondary.dark">
    {data.map((section, index) => (
      <Box key={section.title}>
        <Heading mb={"32px"} variant="subh1" mt={index === 0 ? "24px" : "92px"}>
          {section.title}
        </Heading>
        {section.features.map((feature, index) => (
          <Flex
            key={feature.label}
            w={"100%"}
            bg={(index % 2) - 1 ? "rgba(145,33,194,.04)" : "none"}
            p="12px 15px"
          >
            <Flex w={"30%"} align="center" flexWrap="wrap">
              <Text variant="body3" color="rgba(0,0,0,.72)">
                {feature.label}
              </Text>
              {feature.tag && (
                <Tag
                  sx={{
                    background: "rgba(145,33,194,.16)",
                    color: "#9121c2",
                    borderRadius: "6px",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "normal",
                    ":hover": {
                      opacity: "0.85",
                    },
                  }}
                  ml={3}
                >
                  SOON
                </Tag>
              )}
            </Flex>
            <Box w={"17.5%"} alignSelf="center">
              <RightText rowIndex={1}>{feature.developerData}</RightText>
            </Box>
            <Box w={"17.5%"} alignSelf="center">
              <RightText rowIndex={2}>{feature.starterData}</RightText>
            </Box>
            <Box w={"17.5%"} alignSelf="center">
              <RightText rowIndex={3}>{feature.growthData}</RightText>
            </Box>
            <Box w={"17.5%"} alignSelf="center">
              <RightText rowIndex={4}>{feature.enterpriseData}</RightText>
            </Box>
          </Flex>
        ))}
      </Box>
    ))}
  </Box>
);

export default CompareTable;
