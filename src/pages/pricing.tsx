import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Hero from "components/pages/pricing/Hero";
import Plans from "components/pages/pricing/Plans";
import TrustedBy from "components/pages/pricing/TrustedBy";
import FAQ from "components/pages/pricing/FAQ";
import Compare from "components/pages/pricing/Compare";
import Footer from "components/Footer/index";
import { NextSeo } from 'next-seo';

const Pricing = () => {
  return (
    <>
      <NextSeo
        title="Pricing | Courier"
        description=""
        canonical="https://www.courier.com/pricing"
      />
      <Box mb={8} background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`} backgroundSize='cover' borderRadius='0 0 40px 40px'>
          <Header noHeaderBoxShadow />
          <Hero />
      </Box>
      <Plans />
      <TrustedBy />
      <FAQ />
      <Footer />
    </>
  );
};

export default Pricing;
