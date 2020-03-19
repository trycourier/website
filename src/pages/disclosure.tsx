import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "gatsby-background-image";

import Container from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";

import colors from "../colors";

const DisclosurePolicy: React.FC = () => {
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
  `;

  const PageWrapper = styled.div`
    position: relative;
    top: -100px;
    padding: 0px 16px;
    color: ${colors.textSecondary};
  `;
  return (
    <Layout>
      <SEO title="Responsible Disclosure Policy" />

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
            <h1 style={{ color: colors.textPrimary }}>
              Courier Responsible Disclosure Policy
            </h1>
            <p>
              <em>Last Updated: February 11, 2020</em>
            </p>

            <p>
              Data security is a top priority for Courier, and Courier believes
              that working with skilled security researchers can identify
              weaknesses in any technology.
            </p>
            <p>
              If you believe you’ve found a security vulnerability in Courier’s
              service, please notify us; we will work with you to resolve the
              issue promptly.
            </p>

            <h2>Disclosure Policy</h2>
            <ul>
              <li>
                If you believe you’ve discovered a potential vulnerability,
                please let us know by emailing us at{" "}
                <a href="mailto:security@trycourier.com">
                  security@trycourier.com
                </a>
                . We will acknowledge your email within five business days.
              </li>
              <li>
                Provide us with a reasonable amount of time to resolve the issue
                before disclosing it to the public or a third party. We aim to
                resolve critical issues within five business days of disclosure.
              </li>
              <li>
                Make a good faith effort to avoid violating privacy, destroying
                data, or interrupting or degrading the Courier service. Please
                only interact with accounts you own or for which you have
                explicit permission from the account holder.
              </li>
            </ul>

            <h2>Exclusions</h2>
            <p>While researching, we’d like you to refrain from:</p>
            <ul>
              <li>Distributed Denial of Service (DDoS)</li>
              <li>Spamming</li>
              <li>
                Social engineering or phishing of Courier employees or
                contractors
              </li>
              <li>
                Any attacks against Courier’s physical property or data centers
              </li>
            </ul>
            <p>Thank you for helping to keep Courier and our users safe!</p>

            <h2>Changes</h2>
            <p>
              We may revise these guidelines from time to time. The most current
              version of the guidelines will be available at{" "}
              <a href="https://www.trycourier.com/disclosure">
                https://www.trycourier.com/disclosure
              </a>
              .
            </p>

            <h2>Contact</h2>
            <p>
              Courier is always open to feedback, questions, and suggestions. If
              you would like to talk to us, please feel free to email us at{" "}
              <a href="mailto:security@trycourier.com">
                security@trycourier.com
              </a>
              .
            </p>

            <h2>Responsibility</h2>
            <p>
              It is the CEO’s responsibility to see this policy is enforced.
            </p>
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

export default DisclosurePolicy;
