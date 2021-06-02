import { Box } from "@chakra-ui/react";
import Banner from './Banner';
import Menus from './Menus/index';
import Credit from './Credit';
import Container from 'components/Container';

const Footer = ({noBanner}: {noBanner?: boolean}) => {
  return (
    <>
    <Box display={{base: "block", lg: "none"}}>
      <Banner />
    </Box>
    <Box w={'100%'} bg='secondary.dark' borderRadius={{base: "none", lg: '24px 24px 0 0'}} mt={{base: 0, lg: "132px"}}>
      <Container pt={'42px'}>
        {
          !noBanner && 
          <Box display={{base: "none", lg: "block"}}>
            <Banner />
          </Box>
        }
        <Menus mt={{base: "32px", lg: "62px"}} />
        <Credit />
      </Container>
    </Box>
    </>
  );
};

export default Footer;
