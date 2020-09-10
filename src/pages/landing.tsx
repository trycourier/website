import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import tw from "tailwind.macro";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FeatureGrid from "../components/featureGrid";

import Container from "../components/container";
import Hero from "../components/home/hero";

import colors from "../colors";
import Image from "../components/image";

import bluecrew from "../images/clients/bluecrew.svg";
import blissfully from "../images/clients/blissfully.svg";
import expel from "../images/clients/expel.svg";
import lattice from "../images/clients/lattice.svg";
import launchdarkly from "../images/clients/launchdarkly.svg";
import youtube from "../images/youtube.svg";
import twitch from "../images/twitch.svg";
import periscope from "../images/periscope.svg";

import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/core";
import { listStyles } from "../components/styles";
import { css } from "@emotion/core";
import Divider from "../components/home/divider";
import Footer from "../components/footer";

const IndexPage: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);
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

  const Section = styled(Box)`
    position: relative;
    width: 100%;
  `;
  Section.defaultProps = { as: "section" };

  const LogoSection = styled.section`
    position: relative;
    width: 100%;
    background: ${colors.berryPale};
  `;
  const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
    ${tw`mx-auto flex-wrap md:flex-nowrap`};
    padding: 36px 0;
    align-items: center;
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
    color: black;
    width: fit-content;
    white-space: nowrap;
  `;
  const Flex = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  `;
  const ClientImage = styled.img`
    margin: auto;
    ${tw`w-1/2 md:w-auto`}
    height: 29px;
  `;

  const HeroEyebrow = () => (
    <a style={{ textDecoration: "none" }} href={"#integrations"}>
      <Flex>
        <Image image={ss} style={{ width: 35 }} />{" "}
        <EyebrowWrapper>Twilio Signal / DEVELOPER CONFERENCE</EyebrowWrapper>{" "}
      </Flex>
    </a>
  );
  return (
    <Layout>
      <SEO title="Home" />

      <Section>
        <div
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundImage: `url("/landing.svg")`,
          }}
        >
          <Container>
            <Hero ctaStyle={{ marginTop: 50 }} eyebrow={<HeroEyebrow />} />
          </Container>
        </div>
      </Section>
      <Section>
        <Section>
          <Container>
            <FeatureGrid />
          </Container>
        </Section>
      </Section>
      <LogoSection>
        <LogoWrapper>
          <ClientImage src={lattice} alt="Lattice" />
          <ClientImage src={blissfully} alt="Blissfully" />
          <ClientImage src={launchdarkly} alt="LaunchDarkly" />
          <ClientImage src={expel} alt="Expel" />
          <ClientImage src={bluecrew} alt="Bluecrew" />
        </LogoWrapper>
      </LogoSection>
      <Box
        as={"section"}
        css={css`
          ${listStyles}
          background: ${colors.lightGray};
        `}
      >
        <SimpleGrid
          maxW={1280}
          columns={[1, 3]}
          mx={"auto"}
          py={[6, , 10]}
          px={[4, , 130]}
          gap={[5, 100]}
        >
          <ClientImage src={lattice} alt="Lattice" />
          <ClientImage src={expel} alt="Expel" />
          <ClientImage src={bluecrew} alt="Bluecrew" />
        </SimpleGrid>

        <SimpleGrid
          maxW={1280}
          columns={[1, 2]}
          mx={"auto"}
          py={[6, , 10]}
          px={[4, , 130]}
        >
          <Box>
            <Heading color={"textPrimary"} mt={0}>
              Lorem ipsum
            </Heading>
            <List>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </ListItem>
            </List>

            <Button
              px={8}
              py={4}
              bg={"#D5EEE9"}
              border={"none"}
              borderRadius={"full"}
            >
              Sign Up
            </Button>
          </Box>
          <Box bg={"berry"} w={"full"} height={"100%"}></Box>
        </SimpleGrid>
      </Box>

      <Box
        as={"section"}
        css={css`
          ${listStyles}
          padding: 80px 0;
          margin: 0;
        `}
        id={"integrations"}
      >
        <Heading color={"textPrimary"} textAlign={"center"}>
          Courier @ Twilio Signal
        </Heading>
        <SimpleGrid
          maxW={1280}
          columns={[1, 2]}
          mx={"auto"}
          py={[6, , 10]}
          px={[4, , 130]}
        >
          <Box>
            <Box bg={"berry"} w={"full"} height={"100%"} minHeight={400}></Box>

            <Box
              w={276}
              bg={"#F3D9EE"}
              p={4}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              display={"flex"}
              mt={5}
              mb={[8, , 0]}
              borderRadius={"full"}
            >
              <img src={youtube} />
              <img src={twitch} />
              <img src={periscope} />
            </Box>
          </Box>
          <Box textAlign={"right"}>
            <Heading color={"textPrimary"} mt={0}>
              Lorem ipsum
            </Heading>
            <List>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </ListItem>
              <ListItem>Lorem ipsum dolor sit amet consectit.</ListItem>
              <ListItem>Lorem ipsum dolor sit am</ListItem>
              <ListItem>Lorem ipsum dolor sit amet cons.</ListItem>
              <ListItem>Lorem ipsum</ListItem>
            </List>
            <Button
              px={8}
              py={4}
              bg={"#D5EEE9"}
              border={"none"}
              borderRadius={"full"}
            >
              RSV
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Section>
        <TopDivider className="footer" bg={"white"}>
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
