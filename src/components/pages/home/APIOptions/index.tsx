import { Flex, Heading, Text, Box, Tag } from '@chakra-ui/react';
import TextButton from 'components/buttons/TextButton';
import InternalLink from 'components/InternalLink';
import { documentation } from 'constants/urls';
import CodeBox from './CodeBox';
import Container from 'components/Container';

const APIOptions = () => (
    <Box bg='rgba(145, 33, 194, 0.05)'>
        <Container maxWidth={1240}>
            <Flex pt={{base: "92px", lg: "132px"}} flexDirection={{base: "column-reverse", lg: "row"}}>
                <CodeBox />
                <Box w={{base: "100%", lg: "60%", xl: "45%"}} mt={{base: "62px", lg: 0}} pb={{lg: "92px"}}>
                    <Tag sx={{color: "#791EB3", backgroundColor: 'rgba(121, 30, 179, 0.16)', fontSize: "10px", fontWeight: "600", marginBottom: "18px"}}>BUILT FOR DEVELOPERS</Tag>
                    <Heading variant='h3'>All your notifications, just one API</Heading>
                    <Text mt={'32px'} w={'100%'} variant='body1' mb={'42px'}>With just one easy-to-use API, you can access client libraries written in the most popular programming languages, and deploy notifications faster with cleaner code.</Text>
                    <InternalLink to={documentation}>
                        <TextButton> Check out our docs </TextButton>
                    </InternalLink>
                </Box>
            </Flex>
        </Container>
    </Box>
)

export default APIOptions;