import { Heading, Box, Text, Flex } from '@chakra-ui/react';

const Hero = () => (
    <Flex color="secondary.dark" mt={{base: "132px", lg: "142px", xl: "192px"}} w={"100%"}>
        <Box mx='auto' textAlign='center' p="0 20px">
            <Heading variant="h2">Latest news and updates</Heading>
            <Text textAlign="center" mt={4} variant="body1">Helpful tips, live streams with amazing people and more...</Text>
        </Box>
    </Flex>            
);

export default Hero;