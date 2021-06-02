import { Image, Box } from '@chakra-ui/react';

const HomeHeroMobileImage = () => (
    <Box display={{base: "block", xl: "none"}}>
        <Image src={'/images/pages/home/hero/mobile-static.png'} mx='auto' mt={{base: "-180px", xl: '-500px'}} padding='0 20px'/>    
    </Box>    
);

export default HomeHeroMobileImage;