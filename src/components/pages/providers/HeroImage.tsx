import { Flex, Image } from '@chakra-ui/react';
import Container from 'components/Container';

const HeroImage = () => (
    <Container maxWidth={1000}>
        <Flex bg="rgba(255, 255, 255, 0.2)" mt={'-290px'} justify="center" borderRadius="30px" sx={{
            backdropFilter: "blur(30px)"
        }}>
            <Image src={"/images/pages/integrations/providers/integrations-hero.png"} mt={"50px"} />
        </Flex>
    </Container>        
);

export default HeroImage;