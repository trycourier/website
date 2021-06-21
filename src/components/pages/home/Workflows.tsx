import { Flex, Heading, Text, Box, Tag } from '@chakra-ui/react';
import Container from 'components/Container';
import Image from 'next/image';

const Workflows = () => (
    <Container maxWidth={1240}>
        <Flex mt={{base: "62px", lg: "132px"}} mb={{base: "92px", xl: 0}}>
            <Box w={{base: "100%", lg: "40%", xl: '45%'}}>
                <Tag sx={{color: "secondary.salmon", backgroundColor: 'primary.sand', fontSize: "10px", fontWeight: "600", marginBottom: "18px"}}>WORKFLOWS</Tag>
                <Heading variant='h3' >Reach users at the right time on the right channel</Heading>
                <Text mt={'32px'} w={{base: "100%", lg: '95%'}} variant='body1'>Prioritize your channels and use both conditional logic and user preferences, to control who sees what, when, and through which channel.</Text>
            </Box>
            <Box display={{base: "none", lg: "block"}} ml={{base: 0, xl: '62px'}} mb={'92px'}>
                <Image src={'/images/pages/home/workflows/workflows.png'} width={"526px"} height={"364px"}  />
            </Box>
        </Flex>
    </Container>
)

export default Workflows;
