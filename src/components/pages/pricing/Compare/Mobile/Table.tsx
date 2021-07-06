import { Text, Heading, Box, Flex, Tag } from "@chakra-ui/react";
import TickMark from "components/icons/TickMark";
import data from "../data";
import CTAs from "./CTAs";
type PlanNameType =
  | "developerData"
  | "starterData"
  | "growthData"
  | "enterpriseData";

interface RightTextProps {
  children: React.ReactNode;
  planNameKey: PlanNameType;
}

const RightText = ({ children, planNameKey }: RightTextProps) => {
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
  } else if (children === "selected" && planNameKey === "developerData") {
    return <TickMark gradient={false} />; //TODO
  } else if (children === "selected" && planNameKey !== "developerData") {
    return <TickMark gradient={false} />;
  } else if (planNameKey == "developerData") {
    return (
      <Text
        variant="body3"
        background="linear-gradient(270deg,#9121c2,#ff5e5e)"
        sx={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
      >
        {children}
      </Text>
    );
  } else {
    return <Text variant="body3medium">{children}</Text>;
  }
};

const PlanCTA = ({ planNameKey }: { planNameKey: PlanNameType }) => {
  if (planNameKey === "developerData") {
    return <CTAs.developerData />;
  }
  if (planNameKey === "starterData") {
    return <CTAs.starterData />;
  }
  if (planNameKey === "growthData") {
    return <CTAs.growthData />;
  }
  return <CTAs.enterpriseData />;
};

const CompareTableMobile = ({ planNameKey }: { planNameKey: PlanNameType }) => {
  return (
    <Box color="secondary.dark">
      <PlanCTA planNameKey={planNameKey} />
      {data.map((section, sectionIndex) => (
        <Box
          key={section.title}
          pb={section.title == "Support & services" ? "22px" : 0}
        >
          <Heading
            mb={"16px"}
            variant="subh1"
            mt={sectionIndex === 0 ? "24px" : "32px"}
          >
            {section.title}
          </Heading>
          {section.features.map((feature) => (
            <Flex
              key={feature.label}
              w={"100%"}
              p="8px 0px"
              justify="space-between"
            >
              <Flex align="center" flexWrap="wrap">
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
              <Box alignSelf="center">
                <RightText planNameKey={planNameKey as PlanNameType}>
                  {feature[planNameKey]}
                </RightText>
              </Box>
            </Flex>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default CompareTableMobile;
