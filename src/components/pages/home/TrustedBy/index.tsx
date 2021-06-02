import { Flex, Heading } from '@chakra-ui/react';
import Customers from './Customers';
import Investors from './Investors';
import Container from 'components/Container';

const TrustedBy = () => (
    <Container>
        <Flex mt={{base: "92px", lg: '132px'}} align="center" direction="column">
            <Heading variant='h4' textAlign='center'>
                Trusted by product teams at
            </Heading>
            <Customers />
            <Investors />
        </Flex>
    </Container>
)

export default TrustedBy;
