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


const IndexPage: React.FC = () => {
  const { heroBg, apiBg, divider1, divider2, divider3, divider4 } = useStaticQuery(graphql`
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
      divider1: file(relativePath: { eq: "dividers/hero-white@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider2: file(relativePath: { eq: "dividers/quote-white-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider3: file(relativePath: { eq: "deprecated/Separator 3@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
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

const BotDivider = styled(Divide)`
  bottom: 0px;
`;

const Section2 = styled.section`
  position: relative;
  top: -100px;
  width: 100%;
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
          height: "100vh",
        }}
      >
        <Container>
          <Hero />
        </Container>
      </BackgroundImage>
        <Divider image={divider1} />
      </Section>

      <Section2>
        <BotDivider style={{bottom: -50}}>
          <Divider image={divider2} />
        </BotDivider>
        <Container>
          <Clients />
        </Container>
      </Section2> 

      <BackgroundImage
        Tag="section"
        fluid={apiBg.childImageSharp.fluid}
        backgroundColor={colors.textPrimary}
        style={{
          backgroundPosition: "center center",
          height: "50vh",
        }}
      >
        <TopDivider />
        <Container>
          <QuoteComponent />
        </Container>
      </BackgroundImage>

      <Container >
        <Editor />
      </Container>

      <Container bg="moonlight">
        <Implement />
      </Container>

      <Container>
        <Tracking />
      </Container>

      <Container bg="berrywhite">
        <Route />
      </Container>

      <Container>
        <GettingStarted />
      </Container>

      <Container bg="berry">
        <Footer />
      </Container> 

    </Layout>
  );
};

export default IndexPage;
