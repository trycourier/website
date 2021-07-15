import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Hero from "components/pages/about/Hero";
import Footer from "components/Footer/index";
import { NextSeo } from "next-seo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HowWeWork from "components/pages/about/HowWeWork";
import Investors from "components/pages/about/Investors";
import WorkWithUs from "components/pages/about/WorkWithUs";

const About = () => {
  const pageTitle = "About Us | Courier";
  const pageDescription =
    "Our mission is to make software to human communication delightful. Courier’s API and Studio enable to the right user at the right time.";
  const pageUrl = "https://www.courier.com/about";

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          type: "website",
          title: pageTitle,
          description: pageDescription,
          site_name: "Courier",
          images: [{ url: "https://www.courier.com/images/og-image.png" }],
        }}
        twitter={{
          cardType: "summary",
          site: "@trycourier",
        }}
      />
      <Box overflow="hidden">
        <Box
          background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
          backgroundSize="cover"
          borderRadius="0 0 40px 40px"
        >
          <Header />
          <Hero />
        </Box>

        <HowWeWork />
        <Investors />
        <WorkWithUs />
        <Footer cta="newsletter" />
      </Box>
    </>
  );
};

export default About;
