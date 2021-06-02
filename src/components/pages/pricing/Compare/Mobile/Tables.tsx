import { Accordion, AccordionItem, Box, AccordionButton, AccordionPanel, AccordionIcon, Heading, Text } from '@chakra-ui/react';
import Table from './Table';
type PlanName = "developerData" | "starterData" | "growthData" | "enterpriseData";

const plansData = [
    { title: "Developer", planNameKey: "developerData" },
    { title: "Starter", planNameKey: "starterData" },
    { title: "Growth", planNameKey: "growthData" },
    { title: "Enterprise", planNameKey: "enterpriseData" }
];

const Developer = () => (
    <Accordion w={{base: "100%"}} allowToggle>
        {
            plansData.map(plan => (
                <AccordionItem borderTop={plan.planNameKey == "developerData" ? "none": "auto"} borderBottom={plan.planNameKey === "enterpriseData" ? "none": "auto"} key={plan.title} p={plan.planNameKey == "developerData" ? "0px 0 20px": "28px 0 20px"}>
                    <AccordionButton pt={0} _hover={{backgroundColor: "#FFFFFF"}}>
                        <Box flex="1" textAlign="left" >
                            <Heading variant="subh1" width="fit-content" color="secondary.dark">
                                {plan.title}
                            </Heading>
                        </Box>
                        <AccordionIcon fontSize="2rem"/>
                    </AccordionButton>
                    <AccordionPanel pb={0}>
                        <Text variant='body2'>
                            <Table planNameKey={plan.planNameKey as PlanName} />
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            ))
        }
    </Accordion>    
);

export default Developer;