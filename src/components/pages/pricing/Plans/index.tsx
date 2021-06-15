import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import FreeTrialButton from './FreeTrialButton';
import { login } from 'constants/urls';
import data from './data';
import FormattedPrice from './FormattedPrice';
import TickIcon from './TickIcon';

const Plans = () => (
    <Box p="0 20px">
        <Box bg="linear-gradient(128.55deg,hsla(0,0%,100%,.5) -3.29%,hsla(0,0%,100%,0) 98.07%)" p="20px" backgroundSize="cover" border=".4px solid rgba(0,0,0,.04)" backdropFilter="blur(30.8477px)" borderRadius="24px" maxW={1200} mx='auto' mt={'-290px'} textAlign="center">
            <Flex color="secondary.dark" justify="space-between" flexWrap="wrap">
                {
                    data.map((plan, index) => (
                        <Box bg='white' key={plan.name} w={{base: "100%", md: "49%", xl: '23.5%'}} borderRadius={"16px"} p="21px" boxShadow="0 10px 40px rgb(0 0 0 / 8%)" mt={{base: index > 0 ? 10: 0, md: index > 1 ? 4: 0, xl: 0}}>
                            <Text variant="body1medium" fontWeight="600" mb={'27px'}>{plan.name}</Text>
                            <Box minHeight="81px">
                                <Heading variant='h4'>{FormattedPrice({price: plan.price})}</Heading>
                                <Text variant="smallbody2" color="secondary.dark" opacity="0.48" mt={2}>{plan.limits}</Text>
                            </Box>
                            <FreeTrialButton width={"200px"} height={"50px"} mx='auto' mt={'24px'} link={login} buttonType={plan.buttonType}>{plan.buttonText}</FreeTrialButton>
                            <Box textAlign='left' mt={'42px'}>
                                <Text variant='body3medium' mb={"12px"}>{plan.planIncludes.title}</Text>
                                {
                                    plan.planIncludes.points.map((point, index) => (
                                        <Flex mb={"20px"} key={point}>
                                            <TickIcon />
                                            <Text key={index} variant="body3">{point}</Text>
                                        </Flex>
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }
            </Flex> 
        </Box>    
    </Box>
);

export default Plans;