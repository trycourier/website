import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Container from "../components/container";
import Footer from "../components/footer";

import Hero from "../components/home/hero";
import OneApi from "../components/home/one-api-call";
import Clients from "../components/home/clients";
import Editor from "../components/home/editor";
import Delivery from "../components/home/delivery-rules";
import Tracking from "../components/home/tracking";
import GettingStarted from "../components/home/getting-started";

import {TopDivider, BottomDivider} from "../components/dividers";

import colors from "../colors";
import QuoteComponent from "../components/home/client-quote";
import QuoteComponent2 from "../components/home/client-quote-2";

const IndexPage: React.FC = () => {

  const Section = styled.section`
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    & svg.top {
      position: absolute;
      top: -1px;
    }
    & svg.bottom {
      position: absolute;
      bottom: -1px;
      left:-1px;
    }
  `;

  const {
    heroBg
  } = useStaticQuery(graphql`
    query {
      heroBg: file(relativePath: { eq: "bgs/hero-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  const bgStyle = {
    backgroundSize: "cover"
  };

  return (
    <Layout>
      <SEO title="Home" />

      <Section style={{ background: colors.berry }}>
      <BackgroundImage fluid={heroBg.childImageSharp.fluid} style={bgStyle}>
        <Container>
          <Hero />
        </Container>
        <BottomDivider />
      </BackgroundImage>
      </Section>

      <Section>
        <Container>
          <Clients />
        </Container>
      </Section>

      <Section style={{ background: colors.moonlight, minHeight: 112, marginBottom: -24 }}>
        <TopDivider />
        <Container bg="textPrimary">
          <QuoteComponent />
        </Container>
      </Section>

      <Section style={{ background: colors.white }}>
        <TopDivider fill={colors.moonlight} />
        <Container>
          <Editor />
        </Container>
        <BottomDivider fill={colors.moonlight} />
      </Section>

      <Section style={{ background: colors.moonlight }}>
        <Container>
          <OneApi />
        </Container>
      </Section>

      <Section style={{ background: colors.white }}>
        <Container>
          <QuoteComponent2 />
        </Container>
      </Section>

      <Section style={{ background: colors.white }}>
        <TopDivider fill={colors.moonlight} />
        <Container>
          <Tracking />
        </Container>
      </Section>

      <Section style={{ background: colors.berryWhite }}>
        <TopDivider />
        <Container>
          <Delivery />
        </Container>
      </Section>

      <Section>
        <TopDivider fill={colors.berryWhite} />
        <Container>
          <GettingStarted />
        </Container>
      </Section>

      <Section style={{ background: colors.berry }}>
        <TopDivider />
        <Container>
          <Footer />
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
