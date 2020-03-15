import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "gatsby-background-image";

import Container from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";
import Hero from "../components/home/hero";
import Implement from "../components/home/implement";
import Clients from "../components/home/clients";
import Editor from "../components/home/editor";
import Route from "../components/home/route";
import Tracking from "../components/home/tracking";
import GettingStarted from "../components/home/getting-started";

import colors from "../colors";
import QuoteComponent from "../components/home/client-quote";
import QuoteComponent2 from "../components/home/client-quote-2";

const IndexPage: React.FC = () => {
  const { heroBg, apiBg, quoteBg, divider1, divider2, divider3, divider4, footerBg } = useStaticQuery(graphql`
    query {
      heroBg: file(relativePath: { eq: "bgs/hero-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apiBg: file(relativePath: { eq: "bgs/api@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quoteBg: file(relativePath: { eq: "dividers/quote-1@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 3600) {
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
      divider2: file(relativePath: { eq: "dividers/quote-white-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider3: file(relativePath: { eq: "dividers/one-api-call-top.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider4: file(relativePath: { eq: "deprecated/Separator 4@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerBg: file(relativePath: { eq: "dividers/footer-bg@2x.png"}) { 
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

// const Section2 = styled.section`
//   position: relative;
//   background: ${colors.textPrimary};
//   width: 100%;
// `

  return (
    <Layout>
      <SEO title="Home" />
        

      <BackgroundImage
        Tag="section"
        fluid={heroBg.childImageSharp.fluid}
        backgroundColor={colors.berry}
        style={{
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Container>
          <Hero />
        </Container>
      </BackgroundImage>
      <Divider image={divider1} />

      
      {/* 
      <Section2>
        <BotDivider style={{bottom: -50}}>
          <Divider image={divider2} />
        </BotDivider> 
      </Section2> 
      */}

      <Container>
        <Clients />
      </Container>
      
      {/* <BackgroundImage
        Tag="section"
        fluid={apiBg.childImageSharp.fluid}
        backgroundColor={colors.textPrimary}
        style={{
          backgroundPosition: "center center",
          height: "50vh",
        }}
      >
        <TopDivider />

      </BackgroundImage> */}

      <BackgroundImage
        Tag="section"
        fluid={quoteBg.childImageSharp.fluid}
        backgroundColor={colors.white}
        style={{
          backgroundPosition: "center center",
          height: "250px",
        }}
      >
        <Container bg="textPrimary">
          <QuoteComponent />
        </Container>
      </BackgroundImage>

      <Section>
        <Container >
          <Editor />
        </Container>
      </Section>

      <Section>
        <TopDivider />
        <Container bg="newMoon">
          <Implement />
        </Container>
      </Section>

      <Section>
        <TopDivider />
        <QuoteComponent2 />
        <Container>
          <Tracking />
        </Container>
      </Section>

      <Section>
        <TopDivider />
        <Container bg="berrywhite">
          <Route />
        </Container>
      </Section>


      <Section>
        <TopDivider />
        <Container>
          <GettingStarted />
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
