import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import SingleBox from './SingleBox';
import data from './data';
import Container from 'components/Container';

const Integrations = () => (
    <Container maxWidth={1240} mt={"92px"}>
        {
            data.map((integrations, index) => (
                <Box mt={index === 0 ? "0": "92px"}>
                    <Heading mb={"62px"} fontSize="36px" fontWeight="700">{integrations.category}</Heading>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                        {
                            integrations.integrations.map((integration: any) => (
                                <SingleBox name={integration.name} link={integration.link}image={integration.image}/>
                            ))
                        }
                    </SimpleGrid>
                </Box>
            ))
        }
    </Container>        
);

export default Integrations;