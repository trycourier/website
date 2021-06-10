import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import CTAGradient from 'components/buttons/CTAGradient';
import { login } from 'constants/urls';

const FooterBanner = () => {
    return (
            <Box color='white' background='url("/images/footer/footerAdBg.svg"), linear-gradient(270deg,#9121c2,#ff5e5e)' p={{base: "0 20px", lg: "0 50px", xl: '0 100px'}} borderRadius={{base: "24px 24px 0 0", lg: '24px'}} mt={{base: "92px", lg: 0}}>
                <Flex direction={{base: "column", lg: "row"}}>
                    <Box alignSelf="center" pt={{base: 16, lg: 0, xl: 16}}>
                        <Heading variant='h2' w={{base: "100%", md: "75%", lg: "50%", xl: '70%'}}>Build your first notification in minutes</Heading>
                        <Text py={6} w={{base: "100%", lg: "40%", xl: "100%"}}>Send up to 10,000 notifications every month, for free.</Text>
                        <CTAGradient text={'Get started for free'} link={login} />
                    </Box>
                    <Flex pt={{base: '104px'}} ml={{base: 0, lg: "-430px", xl: '-172px'}}>
                        <Image src={'/images/footer/footeradsmall@2x.png'} w={{base:"60%", md: "314px"}} />
                        <Image src={'/images/footer/footeradLarge@2x.png'} w={{base:"60%", md: "314px"}} ml={'-115px'} mt={'-50px'}/>
                        
                    </Flex>
                </Flex>
            </Box>
    )
}

export default FooterBanner
