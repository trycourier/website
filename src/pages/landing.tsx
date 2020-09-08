import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import tw from "tailwind.macro";
import styled, { css } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FeatureGrid from "../components/featureGrid";

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
import Image from "../components/image";

const IndexPage: React.FC = () => {
  const {
    heroBg,
    quoteBg,
    divider1,
    divider3,
    divider4,
    divider5,
    divider6,
    divider7,
    ss,
  } = useStaticQuery(graphql`
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
      divider3: file(
        relativePath: { eq: "dividers/mod/one-api-call-top.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider4: file(
        relativePath: { eq: "dividers/mod/one-api-call-bottom.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider5: file(
        relativePath: { eq: "dividers/delivery-white-top@2x.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider6: file(
        relativePath: { eq: "dividers/delivery-white-bottom@2x.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider6: file(
        relativePath: { eq: "dividers/delivery-white-bottom@2x.png" }
      ) {
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
      footerBg: file(relativePath: { eq: "dividers/footer-bg@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss: file(relativePath: { eq: "ss.png" }) {
        childImageSharp {
          fluid(maxWidth: 70) {
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
  };

  const TopDivider = styled(Divide)`
    top: -4px;
    height: 160px;
    background-color: ${(props: ContainerProps) => colors[props.bg]};
    &.footer {
      height: 130px;
    }
  `;

  const BotDivider = styled(Divide)`
    bottom: -66px;
    background-color: ${(props: ContainerProps) => colors[props.bg]};
    height: 115px;
  `;

  const HeroDivider = styled(Divide)`
    bottom: 0px;
    height: 160px;
  `;
  const EyebrowWrapper = styled.div`
    background: #db57c0;
    border-radius: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-left: 8px;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  `;

  const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    ${tw`md:flex-no-wrap flex-wrap`}
  `;

  const HeroEyebrow = () => (
    <Flex>
      <Image image={ss} style={{ width: 35 }} />{" "}
      <EyebrowWrapper>Twilio Signal / DEVELOPER CONFERENCE</EyebrowWrapper>{" "}
    </Flex>
  );
  return (
    <Layout>
      <SEO title="Home" />

      <Section>
        <Container
          bg={colors.berry}
          style={{
            backgroundPosition: "center center",
            backgroundClip: "contain",
            height: "800px",
          }}
        >
          <Container>
            <Hero eyebrow={<HeroEyebrow />} />
          </Container>
        </Container>
        <HeroDivider>
          <Divider image={divider1} />
        </HeroDivider>
      </Section>
      <Section>

        <Section>
          <Container >
            <FeatureGrid  />
            <Flex>
              <div  css={css`${tw`w-full md:w-1/2`}`} >
                <p>
                  Detailed event log for every user on every channel  Each notification
                  sent comes with a detailed summary and timeline of its delivery. View
                  what was sent from the REST API, when and where it was routed, any
                  errors that ight have occurred, and more!
                </p>
              </div>
              <div css={css`${tw`w-full md:w-1/2`}`} >
                <p>
                  Detailed event log for every user on every channel  Each notification
                  sent comes with a detailed summary and timeline of its delivery. View
                  what was sent from the REST API, when and where it was routed, any
                  errors that ight have occurred, and more!
                </p>
              </div>
            </Flex>
          </Container>
          <BotDivider>

            <Divider image={divider3} />
          </BotDivider>
        </Section>
      </Section>
    </Layout>
  );
};

export default IndexPage;
