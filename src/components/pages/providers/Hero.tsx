import { Box, Heading, Text } from "@chakra-ui/react";
import Container from 'components/Container';

const Hero = () => (
    <Container maxWidth={1200}>
        <Box pt={'160px'} textAlign='center' color='white' pb={'310px'}>
            <Box>
                <Heading textAlign="center" as='h1' variant={'h1'} mx='auto'>Providers</Heading>
                <Text textAlign="center" my={'32px'} variant='body1' mx='auto' w={{base: "100%", md: "60%", lg: "40%", xl: "35%"}}>Deliver notifications to any channel that your users live in, all via a single API.</Text>
            </Box>
        </Box>
    </Container>
)

export default Hero;
