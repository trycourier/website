import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "gatsby-background-image";

import Container from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";

import UsageBasedPricing from "../components/pricing/usage-based-pricing";
import SubscriptionPlans from "../components/pricing/subscription-plans";

import colors from "../colors";

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

const Section = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.white};
`;

const Divide = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
`;

const TopDivider = styled(Divide)`
  top: 0px;
  height: 160px;
  background-color: ${(props: ContainerProps) => colors[props.bg]};
  &.footer {
    height: 130px;
  }
`
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
        >
        </BackgroundImage>
        <Divider image={headerDivider} />
      </Section>

      <Section>
        <Container bg="transparent">
          <div style={{position: "relative", top: -100 }}>
          <UsageBasedPricing />
          <SubscriptionPlans />
          </div>
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
