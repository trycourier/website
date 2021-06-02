import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import notificationPoints from './points';

interface NotificationProps {
    title: string,
    icon: string,
    description: string
}

const NotificationPoint = ({title, icon, description}: NotificationProps) => (
    <Box w={{base: "100%", md: "48%", xl: '23%'}} mb={{base: "62px", md: "4"}}>
        <Image src={icon} h='52px' />
        <Heading variant='subh1' mt={'32px'}>{title}</Heading>
        <Text variant='body3' color='hsla(0,0%,100%,.8)'>{description}</Text>
    </Box>
)

const NotificationSystem = () => {
    return (
        <Box mt={{base: "92px", lg: '132px'}} color='white' p={{base: "64px 40px 20px", xl: '90px 80px 107px' }} borderRadius='24px' background={{base: "url(/images/notificationBg-Mobile.svg) 0 0 no-repeat #2c1338", lg: "url(/images/notificationBg.svg) 0 0 no-repeat #2c1338"}} backgroundSize='cover'>
            <Heading variant='h2'>
                Your complete notifications system
            </Heading>
            <Text variant='body1medium' fontWeight='400' mt={'22px'}>From integrations to insights, we handle all of the heavy lifting</Text>
            <Flex mt={{base: "92px", xl: "132px"}} justify='space-between' flexWrap='wrap'>
                {
                notificationPoints.map(point => (
                    <NotificationPoint icon={point.icon} title={point.title} description={point.description} key={point.title} />
                )) 
                }
            </Flex>
        </Box>
    )
}

export default NotificationSystem;
