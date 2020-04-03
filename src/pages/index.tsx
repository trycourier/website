import React from "react";
import styled from "styled-components";

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

  return (
    <Layout>
      <SEO title="Home" />

      <Section style={{ background: colors.berry }}>
        <Container>
          <Hero />
        </Container>
        <svg className="bottom" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill="#FFF"
            d="M1242.71,111.69v-1.04c-13.89,0.64-28.43,0.96-43.2,0.96c-16.81,0-34.53-0.42-52.66-1.24c-17.37-0.8-35.74-1.99-54.58-3.55
            c-35.01-2.9-72.62-7.11-114.96-12.87C898.07,83.17,813.5,68.46,723.96,52.9h-0.01h-0.01c-68.76-11.95-139.85-24.31-214.42-35.95
            c-19.51-3.04-39.32-5.72-58.87-7.96c-18.76-2.15-37.78-3.95-56.54-5.35c-35.1-2.62-70.58-3.95-105.48-3.95
            c-56.33-0.04-112.61,3.45-168.5,10.44C79.77,15.14,39.71,22.28,0.1,31.5v80.18H1242.71z"
          />
        </svg>
      </Section>

      <Section style={{ background: colors.white, height: 200 }}>
        <Container>
          <Clients />
        </Container>
        <svg className="bottom" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill={colors.moonlight}
            d="M1242.71,111.69v-1.04c-13.89,0.64-28.43,0.96-43.2,0.96c-16.81,0-34.53-0.42-52.66-1.24c-17.37-0.8-35.74-1.99-54.58-3.55
            c-35.01-2.9-72.62-7.11-114.96-12.87C898.07,83.17,813.5,68.46,723.96,52.9h-0.01h-0.01c-68.76-11.95-139.85-24.31-214.42-35.95
            c-19.51-3.04-39.32-5.72-58.87-7.96c-18.76-2.15-37.78-3.95-56.54-5.35c-35.1-2.62-70.58-3.95-105.48-3.95
            c-56.33-0.04-112.61,3.45-168.5,10.44C79.77,15.14,39.71,22.28,0.1,31.5v80.18H1242.71z"
          />
        </svg>
      </Section>

      <Section style={{ background: colors.moonlight, height: 200 }}>
        <Container bg="textPrimary">
          <QuoteComponent />
        </Container>
        <svg className="bottom" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill={colors.white}
            d="M1242.71,111.69v-1.04c-13.89,0.64-28.43,0.96-43.2,0.96c-16.81,0-34.53-0.42-52.66-1.24c-17.37-0.8-35.74-1.99-54.58-3.55
            c-35.01-2.9-72.62-7.11-114.96-12.87C898.07,83.17,813.5,68.46,723.96,52.9h-0.01h-0.01c-68.76-11.95-139.85-24.31-214.42-35.95
            c-19.51-3.04-39.32-5.72-58.87-7.96c-18.76-2.15-37.78-3.95-56.54-5.35c-35.1-2.62-70.58-3.95-105.48-3.95
            c-56.33-0.04-112.61,3.45-168.5,10.44C79.77,15.14,39.71,22.28,0.1,31.5v80.18H1242.71z"
          />
        </svg>
      </Section>

      <Section style={{ background: colors.white }}>
        <Container>
          <Editor />
        </Container>
        <svg className="bottom" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill={colors.moonlight}
            d="M1242.71,111.69v-1.04c-13.89,0.64-28.43,0.96-43.2,0.96c-16.81,0-34.53-0.42-52.66-1.24c-17.37-0.8-35.74-1.99-54.58-3.55
            c-35.01-2.9-72.62-7.11-114.96-12.87C898.07,83.17,813.5,68.46,723.96,52.9h-0.01h-0.01c-68.76-11.95-139.85-24.31-214.42-35.95
            c-19.51-3.04-39.32-5.72-58.87-7.96c-18.76-2.15-37.78-3.95-56.54-5.35c-35.1-2.62-70.58-3.95-105.48-3.95
            c-56.33-0.04-112.61,3.45-168.5,10.44C79.77,15.14,39.71,22.28,0.1,31.5v80.18H1242.71z"
          />
        </svg>
      </Section>

      <Section style={{ background: colors.moonlight }}>
        <Container>
          <OneApi />
        </Container>
      </Section>

      <Section style={{ background: colors.moonlight }}>
        <Container>
          <QuoteComponent2 />
        </Container>

        <svg className="bottom" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill={colors.white}
            d="M1242.71,111.69v-1.04c-13.89,0.64-28.43,0.96-43.2,0.96c-16.81,0-34.53-0.42-52.66-1.24c-17.37-0.8-35.74-1.99-54.58-3.55
            c-35.01-2.9-72.62-7.11-114.96-12.87C898.07,83.17,813.5,68.46,723.96,52.9h-0.01h-0.01c-68.76-11.95-139.85-24.31-214.42-35.95
            c-19.51-3.04-39.32-5.72-58.87-7.96c-18.76-2.15-37.78-3.95-56.54-5.35c-35.1-2.62-70.58-3.95-105.48-3.95
            c-56.33-0.04-112.61,3.45-168.5,10.44C79.77,15.14,39.71,22.28,0.1,31.5v80.18H1242.71z"
          />
        </svg>
      </Section>

      <Section style={{ background: colors.white }}>
        <Container>
          <Tracking />
        </Container>
      </Section>

      <Section style={{ background: colors.berryWhite }}>
      <svg className="top" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill="#FFF"
            d="M0.2,0.4v35.1c39.61-9.22,79.67-16.36,120.02-21.38c55.9-6.99,112.17-10.48,168.5-10.44c34.89,0,70.38,1.33,105.48,3.95
            c18.76,1.4,37.78,3.2,56.54,5.35c19.55,2.24,39.35,4.92,58.86,7.96c74.58,11.64,145.68,24,214.44,35.95
            c89.54,15.57,174.11,30.27,253.34,41.05c42.35,5.76,79.95,9.97,114.96,12.87c18.84,1.56,37.21,2.76,54.58,3.55
            c18.13,0.82,35.85,1.24,52.66,1.24c14.77,0,29.3-0.32,43.2-0.96V0.4H0.2z"
          />
        </svg>
        <Container>
          <Delivery />
        </Container>
      </Section>

      <Section>
        <svg className="top" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill={colors.berryWhite}
            d="M0.2,0.4v35.1c39.61-9.22,79.67-16.36,120.02-21.38c55.9-6.99,112.17-10.48,168.5-10.44c34.89,0,70.38,1.33,105.48,3.95
            c18.76,1.4,37.78,3.2,56.54,5.35c19.55,2.24,39.35,4.92,58.86,7.96c74.58,11.64,145.68,24,214.44,35.95
            c89.54,15.57,174.11,30.27,253.34,41.05c42.35,5.76,79.95,9.97,114.96,12.87c18.84,1.56,37.21,2.76,54.58,3.55
            c18.13,0.82,35.85,1.24,52.66,1.24c14.77,0,29.3-0.32,43.2-0.96V0.4H0.2z"
          />
        </svg>
        <Container>
          <GettingStarted />
        </Container>
      </Section>

      <Section style={{ background: colors.berry }}>
        <svg className="top" x="0" y="0" viewBox="0 0 1243 112">
          <path
            fill="#FFF"
            d="M0.2,0.4v35.1c39.61-9.22,79.67-16.36,120.02-21.38c55.9-6.99,112.17-10.48,168.5-10.44c34.89,0,70.38,1.33,105.48,3.95
            c18.76,1.4,37.78,3.2,56.54,5.35c19.55,2.24,39.35,4.92,58.86,7.96c74.58,11.64,145.68,24,214.44,35.95
            c89.54,15.57,174.11,30.27,253.34,41.05c42.35,5.76,79.95,9.97,114.96,12.87c18.84,1.56,37.21,2.76,54.58,3.55
            c18.13,0.82,35.85,1.24,52.66,1.24c14.77,0,29.3-0.32,43.2-0.96V0.4H0.2z"
          />
        </svg>
        <Container>
          <Footer />
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
