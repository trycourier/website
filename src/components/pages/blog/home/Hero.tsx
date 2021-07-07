import { Heading, Box, Text, Flex } from '@chakra-ui/react';

const Hero = () => (
    <Flex color="secondary.dark" mt={{base: "132px", lg: "142px", xl: "192px"}} w={"100%"}>
        <Box mx='auto' textAlign='center' p="0 20px">
            <Heading variant="h2">Welcome to the Courier Engineering Blog</Heading>
            <Text textAlign="center" mt={4} variant="body1">Interesting topics and learnings in software development.</Text>
        </Box>
    </Flex>            
);

export default Hero;
