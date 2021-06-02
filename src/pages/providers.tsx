import { Box } from "@chakra-ui/react";
import { NextSeo } from 'next-seo';
import Header from "components/Header/index";
import Hero from "components/pages/providers/Hero";
import ProvidersList from "components/pages/providers/Providers";
import HeroImage from "components/pages/providers/HeroImage";
import Footer from "components/Footer/index";

const ProvidersPage = () => (
    <>
      <NextSeo
        title="Providers | Courier"
        description=""
        canonical={`https://www.courier.com/providers`}
      />
      <Box mb={8} background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`} backgroundSize='cover' borderRadius='0 0 40px 40px'>
          <Header />
          <Hero />
      </Box>
      <HeroImage />
      <ProvidersList />
      <Footer />
    </>
);

export default ProvidersPage;