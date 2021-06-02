import { Accordion, AccordionItem, Box, AccordionButton, AccordionPanel, AccordionIcon, Flex, Heading, Text } from '@chakra-ui/react';
import data from './data';
import Container from 'components/Container';

const highlightedEffect = {
    "div > h2": {
        background: "linear-gradient(270deg,#9121c2,#ff5e5e)",
        "WebkitBackgroundClip": "text",
        "WebkitTextFillColor": "transparent"
    },
    "div ~ svg": {
        color: "#9121c2"
    }
}

const FAQ = () => (
    <Container maxWidth={1200}>
        <Flex mt={{base: "62px", lg: "132px"}} direction={{base: "column", lg: "row"}}>
            <Heading w={{base: "100%", lg: '23%'}} variant='h2' textAlign={{base: "center", lg: "left"}}>FAQ</Heading>
            <Accordion w={{base: "100%", lg: '77%'}} color="secondary.dark" mt={{base: 10, lg: 0}} allowMultiple allowToggle>
                {
                    data.map((faq, index) => (
                        <AccordionItem key={index + 1} padding={index === 0 ? "0 0 20px": "28px 0 20px"} borderTop={index === 0 ? "none": "auto"} borderBottom={index === 4 ? "none": "auto"}>
                            <AccordionButton pt={0} _expanded={highlightedEffect} _hover={highlightedEffect}>
                                <Box flex="1" textAlign="left" >
                                    <Heading variant="subh1" width="fit-content">
                                        {faq.question}
                                    </Heading>
                                </Box>
                                <AccordionIcon fontSize="2rem"/>
                            </AccordionButton>
                            <AccordionPanel pb={0}>
                                <Text variant='body2'>
                                    {faq.answer}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
        </Accordion>
        </Flex>
    </Container>
);

export default FAQ;