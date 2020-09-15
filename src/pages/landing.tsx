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
import landing from "../images/bgs/landing.svg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

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
import Panel1 from "../components/panels/panel1";
import Panel2 from "../components/panels/panel2";
import Panel3 from "../components/panels/panel3";
import Arrow from "../components/Arrow";

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

  const LogoSection = styled(Box)`
    position: relative;
    width: 100%;
    background: ${colors.berryPale};
  `;
  const LogoWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    max-width: 1280px;
    ${tw`mx-auto flex-wrap md:flex-nowrap`};
    padding: 36px 0;
    align-items: center;
    & img {
      margin: 8px;
    }
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
  const EyebrowWrapper = styled(Box)`
    background: #db57c0;
    border-radius: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-left: 8px;
    color: #840069;
    width: fit-content;
    white-space: nowrap;
    font-weight: bold;
  `;
  const Flex = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  `;
  const ClientImage = styled.img`
    margin: 0;
    width: auto;
    max-height:30px;
    min-width: 100px;
  `;

  const HeroEyebrow = () => (
    <a style={{ textDecoration: "none" }} href={"#integrations"}>
      <Flex>
        <Image image={ss} style={{ width: 35 }} />{" "}
        <EyebrowWrapper>
          Twilio Signal / DEVELOPER CONFERENCE{" "}
          <Arrow style={{ marginLeft: "4px" }} />
        </EyebrowWrapper>{" "}
      </Flex>
    </a>
  );
  return (
    <Layout>
      <SEO title="Home" />

      <Section maxH={800}>
        <div
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundImage: `url("${landing}")`,
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
          <Box bg={colors.lightGray} py={6} px={[4,,0]}>
            <Container>
              <SimpleGrid columns={[1, 1, 2]} gap={12}>
                <div>
                  <p style={{ display: "block", width: "auto" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Detailed event log for every user on every channel
                    </span>
                    <br />
                    <br />
                    Each notification sent comes with a detailed summary and
                    timeline <br />
                    of its delivery. View what was sent from the REST API, when
                    <br />
                    and where it was routed, any errors that ight have occurred,
                    <br />
                    and more!
                  </p>
                </div>
                <div>
                  <p style={{ display: "block", width: "auto" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Detailed event log for every user on every channel
                    </span>
                    <br />
                    <br />
                    Each notification sent comes with a detailed summary and
                    timeline <br />
                    of its delivery. View what was sent from the REST API, when
                    <br />
                    and where it was routed, any errors that ight have occurred,
                    <br />
                    and more!
                  </p>
                </div>
              </SimpleGrid>
            </Container>
          </Box>
        </Section>
      </Section>
      <LogoSection>
        <LogoWrapper flexWrap={['wrap',,'nowrap']} w={['full',,2/5]}>
          <Box display={'flex'} alignItems={'center'} >
            <ClientImage src={lattice} alt="Lattice" />
            <ClientImage src={blissfully} alt="Blissfully" />
          </Box>
          <Box display={'flex'} alignItems={'center'} w={['full',,3/5]} >

            <ClientImage src={launchdarkly} alt="LaunchDarkly" />
            <ClientImage src={expel} alt="Expel" />
            <ClientImage src={bluecrew} alt="Bluecrew" />
          </Box>
        </LogoWrapper>
      </LogoSection>
      <Box
        as={"section"}
        css={css`
          ${listStyles}
          background: ${colors.lightGray};
          button[role="tab"] {
            border: 0px;
            background: transparent;
            padding: 16px;
          }
          button[tabIndex="0"] {
            background: ${colors.berryPale};
          }
        `}
      >
        <Tabs variantColor="berry">
          <TabList
            maxW={1280}
            columns={[1, 3]}
            mx={"auto"}
            py={[6, , 10]}
            px={6}
            display={"flex"}
            justifyContent={"space-evenly"}
            border={'none'}
          >
            <Tab>
              <ClientImage style={{maxWidth: '33%'}} src={lattice} alt="Lattice" />
            </Tab>
            <Tab>
              <ClientImage style={{maxWidth: '33%'}} src={expel} alt="Expel" />
            </Tab>
            <Tab>
              <ClientImage style={{maxWidth: '33%'}} src={bluecrew} alt="Bluecrew" />
            </Tab>
          </TabList>

          <TabPanels pb={[5, 7, 12]}>
            <TabPanel>
              <Panel1 />
            </TabPanel>
            <TabPanel>
              <Panel2 />
            </TabPanel>
            <TabPanel>
              <Panel3 />
            </TabPanel>
          </TabPanels>
        </Tabs>
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
              <a href={"https://youtube.com"}>
                <img src={youtube} alt={"youtube img"} />
              </a>
              <a href={"https://twitch.tv"}>
                <img src={twitch} />
              </a>
              <a href={"https://periscope.com"}>
                <img src={periscope} />
              </a>
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
