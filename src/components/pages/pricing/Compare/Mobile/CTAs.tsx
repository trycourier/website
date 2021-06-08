import { Box, Text, Flex } from '@chakra-ui/react';
import PurpleBgButton from 'components/buttons/PurpleBg';
import DarkGradientBg from 'components/buttons/DarkGradientBg';
import WhiteBgSimple from 'components/buttons/WhiteBgSimple';

export default {
    developerData: () => (
        <Box>
            <Text variant="smallbody2" color="rgba(44,19,56,.48)">Up to 10,000 notifications/mo</Text>
            <Flex py={4}>
                <Text fontSize="24px" lineHeight="24px" fontWeight="700" sx={{
                    background: "linear-gradient(270deg,#9121C2, #FF5E5E)",
                    "WebkitBackgroundClip": "text",
                    "WebkitTextFillColor": "transparent"
                }}>$0</Text>
                <Text variant="body2">/month</Text>
            </Flex>
            <DarkGradientBg width={"180px"} height={"40px"} link={"/"}>Try for free</DarkGradientBg>
        </Box>
    ),
    starterData: () => (
        <Box>
            <Text variant="smallbody2" color="rgba(44,19,56,.48)">Includes 10,000 notifications/mo +$0.005/additional</Text>
            <Flex py={4}>
                <Text fontSize="24px" lineHeight="24px" fontWeight="700" color="secondary.dark">$99</Text>
                <Text variant="body2">/month</Text>
            </Flex>
            <PurpleBgButton width={"180px"} height={"40px"} link={"/"}>Try for free</PurpleBgButton>
        </Box>
    ),
    growthData: () => (
        <Box>
            <Text variant="smallbody2" color="rgba(44,19,56,.48)">Includes 10,000 notifications/mo +$0.001/additional</Text>
            <Flex py={4}>
                <Text fontSize="24px" lineHeight="24px" fontWeight="700" color="secondary.dark">$2,000</Text>
                <Text variant="body2">/month</Text>
            </Flex>
            <PurpleBgButton width={"180px"} height={"40px"} link={"/"}>Try for free</PurpleBgButton>
        </Box>
    ),
    enterpriseData: () => (
        <Box>
            <Text variant="smallbody2" color="rgba(44,19,56,.48)">Up to 10,000 notifications/mo</Text>
            <Flex py={4}>
                <Text variant="body3">Custom pricing options</Text>
            </Flex>
            <WhiteBgSimple width={"180px"} height={"40px"} link={"/"}>Get a demo</WhiteBgSimple>
        </Box>
    )
}
