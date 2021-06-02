import { Image, SimpleGrid, Box, Text } from '@chakra-ui/react';

const Investors = () => (
    <Box bg='rgba(44, 19, 56, 0.04)' mt={'52px'} borderRadius='16px'>
        <SimpleGrid  columns={{base: 2, md: 4}} spacingX={{base: "82px", md: 12, lg: 6, xl: 10}} spacingY={{base: 10, lg: 0}} align='center' maxW={{lg: 900, xl: 1024}} p={6}>
            <Text color='secondary.dark' opacity='0.5' fontWeight='700' fontSize='18px' fontFamily='Gellix'>BACKED BY</Text>
            <Image src={'/images/investors/ycombinator.svg'} opacity='0.5'/>
            <Image src={'/images/investors/slackFund.svg'} opacity='0.5'/>
            <Image src={'/images/investors/twilio.svg'} opacity='0.5'/>
        </SimpleGrid>
    </Box>
)

export default Investors;
