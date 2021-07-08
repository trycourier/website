import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Hero from "components/pages/home/Hero";
import HeroAnimation from "components/pages/home/HeroAnimation";
import TrustedBy from "components/pages/home/TrustedBy/index";
import NotificationSystem from "components/pages/home/NotificationSystem";
import VisualEditor from "components/pages/home/VisualEditor/index";
import Workflows from "components/pages/home/Workflows";
import APIOptions from "components/pages/home/APIOptions";
import Integrations from "components/pages/home/Integrations";
import Insights from "components/pages/home/Insights";
import Testimonials from "components/pages/home/Testimonials";
import Footer from "components/Footer/index";
import { NextSeo } from "next-seo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const pageTitle = "Multi-Channel Notification API & Platform | Courier";
  const pageDescription =
    "Courier is the smartest way to design and deliver notifications. Design once, and deliver to any channel – email, Slack, SMS, push, and more – through one API.";

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={"https://www.courier.com/"}
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
      <Box
        mb={8}
        background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
        backgroundSize="cover"
        borderRadius="0 0 40px 40px"
      >
        <Header />
        <Hero />
      </Box>
      <HeroAnimation />
      <TrustedBy />
      <Box position="relative">
        <NotificationSystem />
        <Box
          position="absolute"
          w={"100%"}
          bottom={0}
          background="linear-gradient(180deg,#fffffe,#fcede3 80.21%)"
          zIndex={0}
          height={"497px"}
        />
      </Box>
      <VisualEditor />
      <Workflows />
      <APIOptions />
      <Integrations />
      <Insights />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
