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
import OneApi from "../components/home/one-api-call";
import Clients from "../components/home/clients";
import Editor from "../components/home/editor";
import Delivery from "../components/home/delivery-rules";
import Tracking from "../components/home/tracking";
import GettingStarted from "../components/home/getting-started";

import colors from "../colors";
import QuoteComponent from "../components/home/client-quote";
import QuoteComponent2 from "../components/home/client-quote-2";

const IndexPage: React.FC = () => {
  const { heroBg, quoteBg, divider1, divider3, divider4, divider5, divider6, divider7 } = useStaticQuery(graphql`
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
      divider3: file(relativePath: { eq: "dividers/mod/one-api-call-top.png" }) {
        childImageSharp {
          fluid(maxWidth: 3600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider4: file(relativePath: { eq: "dividers/mod/one-api-call-bottom.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider5: file(relativePath: { eq: "dividers/delivery-white-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider6: file(relativePath: { eq: "dividers/delivery-white-bottom@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider6: file(relativePath: { eq: "dividers/delivery-white-bottom@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider7: file(relativePath: { eq: "dividers/mod/footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
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
`;

const Divide = styled.div`
  position: absolute;
  width: 100%;
  min-height: 115px;
  max-height: 160px;
  min-width: 1520px;
`;
type ContainerProps = {
  bg?: string;
}

const TopDivider = styled(Divide)`
  top: -4px;
  height: 160px;
  background-color: ${(props: ContainerProps) => colors[props.bg]};
  &.footer {
    height: 130px;
  }
`

const BotDivider = styled(Divide)`
  bottom: -66px;
  background-color: ${(props: ContainerProps) => colors[props.bg]};
  height: 115px;
`

const HeroDivider = styled(Divide)`
  bottom: 0px;
  height: 160px;
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
            backgroundClip: "contain",
            height: "800px",
          }}
        >
          <Container>
            <Hero />
          </Container>

        </BackgroundImage>
        <HeroDivider>
          <Divider image={divider1} />
        </HeroDivider>
      </Section>
      
      <Section style={{top: -96 }}>
        <Container>
          <Clients />
        </Container>
      </Section>

      <Section style={{top: -96 }}>
        <BackgroundImage
          Tag="section"
          fluid={quoteBg.childImageSharp.fluid}
          backgroundColor={colors.white}
          style={{
            backgroundPosition: "center center",
            height: "280px",
          }}
        >
          <Container bg="textPrimary">
            <QuoteComponent />
          </Container>
        </BackgroundImage>
      </Section>
      
      <Section>
        <Container >
          <Editor />
        </Container>
        <BotDivider>
          <Divider image={divider3} />
        </BotDivider>
      </Section>

      <Section>
        <Container bg="newMoon">
          <OneApi />
        </Container>
      </Section>

      <Section style={{ top: 64 }}>
        <Container>
          <QuoteComponent2 />
        </Container>
      </Section>

      <Section>
      <TopDivider bg="white">
          <Divider image={divider4} />
        </TopDivider>
        <Container>
          <Tracking />
        </Container>
      </Section>

      <Section>
        <TopDivider bg="berryWhite">
          <Divider image={divider5} />
        </TopDivider>
        <Container bg="berryWhite">
          <Delivery />
        </Container>
      </Section>

      <Section>
        <TopDivider bg="berryWhite">
          <Divider image={divider6} />
        </TopDivider>
        <Container>
          <GettingStarted />
        </Container>

      </Section>

      <Section>
        <TopDivider className="footer" bg="white">
          <Divider image={divider7} />
        </TopDivider>
        <Container bg="berry">
          <Footer />
        </Container> 
      </Section>
   
    </Layout>
  );
};

export default IndexPage;
