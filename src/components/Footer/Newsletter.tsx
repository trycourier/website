import { Box, Heading } from "@chakra-ui/react";

import Newsletter from "components/common/Newsletter";

const FooterNewsletter = () => {
  return (
    <Box
      background='url("/images/footer/footerNewsletterBg.svg"), linear-gradient(270deg,#9121c2,#ff5e5e)'
      px={{ base: "20px", lg: "50px", xl: "100px" }}
      py="80px"
      borderRadius={{ base: "24px 24px 0 0", lg: "24px" }}
      mt={{ base: "92px", lg: 0 }}
    >
      <Heading variant="h2" textAlign="center" color="white">
        Get the latest from Courier
      </Heading>

      <Newsletter />
    </Box>
  );
};

export default FooterNewsletter;
