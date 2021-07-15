import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Header from "components/Header/index";
import Hero from "components/pages/features/templates/Hero";
import Templates from "components/pages/features/templates/Templates";
import ApiCalls from "components/pages/features/templates/ApiCalls";
import Footer from "components/Footer/index";

const FeaturesTemplates = () => {
  const pageTitle = "Templates | Features | Courier";
  const pageDescription = "Perfectly formatted messages for every channel.";
  const pageUrl = "https://www.courier.com/features/templates";

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
      <Box
        background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
        backgroundSize="cover"
        borderRadius="0 0 40px 40px"
        overflow="hidden"
      >
        <Header />
        <Hero />
      </Box>
      <Templates />
      <ApiCalls />
      <Footer />
    </>
  );
};

export default FeaturesTemplates;
