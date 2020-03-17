import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "gatsby-background-image";

import Container from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";

import UsageBasedPricing from "../components/privacy/usage-based-pricing";
import SubscriptionPlans from "../components/privacy/subscription-plans";

import colors from "../colors";

const IndexPage: React.FC = () => {

  const { heroBg, divider1 } = useStaticQuery(graphql`
    query {
      heroBg: file(relativePath: { eq: "bgs/hero-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider1: file(relativePath: { eq: "dividers/hero-white@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
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
`

  return (
    <Layout>
      <SEO title="Home" />
        
      <Section>
        <BackgroundImage
          Tag="section"
          fluid={heroBg.childImageSharp.fluid}
          backgroundColor={colors.berry}
          style={{
            backgroundPosition: "center center",
            height: "100px",
          }}
        >
        </BackgroundImage>
        <Divider image={divider1} />
      </Section>

      <Section>
        <TopDivider />
        <Container bg="berrywhite">
          <UsageBasedPricing />
          <SubscriptionPlans />
        </Container>
      </Section>

      <Section>
        <TopDivider />
        <Container bg="berry">
          <Footer />
        </Container> 
      </Section>
   
    </Layout>
  );
};

export default IndexPage;
