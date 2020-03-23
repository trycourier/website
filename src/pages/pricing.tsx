import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "gatsby-background-image";

import Container, {
  Section,
  TopDivider,
  PageWrapper,
} from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";

import UsageBasedPricing from "../components/pricing/usage-based-pricing";
import SubscriptionPlans from "../components/pricing/subscription-plans";

const IndexPage: React.FC = () => {
  const { headerBg, headerDivider, footerDivider } = useStaticQuery(graphql`
    query {
      headerBg: file(relativePath: { eq: "bgs/header-bg@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerDivider: file(relativePath: { eq: "dividers/hero-white@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerDivider: file(relativePath: { eq: "dividers/mod/footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Pricing" />

      <Section>
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

export default IndexPage;
