import React from "react";
import UsageBasedPricing from "../components/pricing/usage-based-pricing";
import SubscriptionPlans from "../components/pricing/subscription-plans";

const PricingPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Pricing" />

      <Section style={{ top: -1 }}>
        <BackgroundImage
          Tag="section"
          fluid={headerBg.childImageSharp.fluid}
          backgroundColor="transparent"
          style={{
            backgroundPosition: "center left",
            height: "300px",
          }}
        ></BackgroundImage>
        <Divider image={headerDivider} />
      </Section>

      <Section>
        <Container bg="transparent">
          <PageWrapper>
            <UsageBasedPricing />
            <SubscriptionPlans />
          </PageWrapper>
        </Container>
      </Section>

      <Section>
        <TopDivider className="footer" bg="white">
          <Divider image={footerDivider} />
        </TopDivider>
        <Container bg="berry">
          <Footer />
        </Container>
      </Section>
    </Layout>
  );
};

export default PricingPage;
