import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Graphic from "components/pages/request-demo/Graphic";
import Form from "components/pages/request-demo/Form";

const RequestDemo = () => {
  const pageTitle = "Request Demo | Courier";
  const pageDescription = "Request Courier Demo";
  const pageUrl = "https://www.courier.com/request-demo";
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
      <Flex direction={{ base: "column", lg: "row" }} minH="100vh">
        <Graphic />
        <Form />
      </Flex>
    </>
  );
};

export default RequestDemo;
