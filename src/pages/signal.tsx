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
import { Text } from "@chakra-ui/core";

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
    signalImage,
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
        
      signalImage: file(relativePath: { regex: "/Signal Combined/" }) {
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
    padding-bottom: 36px ;
    padding-top: 16px ;
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
    background: white;
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
    text-shadow: none;
  `;
  const Flex = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  `;
  const ClientImage = styled.img`
    margin: 0;
    width: auto;
    max-height: 30px;
    min-width: 100px;
  `;

  const HeroEyebrow = () => (
    <a style={{ textDecoration: "none" }} href={"#integrations"}>
      <Flex>
        <Image image={ss} style={{ width: 35 }} />{" "}
        <EyebrowWrapper>
          Twilio Signal / Developer Conference{" "}
          <Arrow style={{ marginLeft: "4px" }} />
        </EyebrowWrapper>{" "}
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
          <Box bg={colors.lightGray} py={6} px={[4, , 0]}>
            <Container>
              <SimpleGrid columns={[1, 1, 2]} gap={12}>
                <div>
                  <p
                    style={{
                      display: "block",
                      width: "auto",
                      maxWidth: 350,
                      margin: "auto",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Beautiful multi-channel notifications
                    </span>
                    <br />
                    <br />
                    Create branded templates for every channel with our no-code
                    visual designer. Drag and drop reusable content blocks, or
                    add custom code to make it fully your own.
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      display: "block",
                      width: "auto",
                      maxWidth: 350,
                      margin: "auto",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Powerful orchestration engine
                    </span>
                    <br />
                    <br />
                    Notify the right users on the right channels based on their
                    preferences and your rules. Out of the box list management,
                    automatic digests, scheduling, cross-channel engagement
                    tracking, and more.
                  </p>
                </div>
              </SimpleGrid>
            </Container>
          </Box>
        </Section>
      </Section>
      <LogoSection>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Heading mb={0}>Trusted by leading companies</Heading>{" "}
        </Box>
        <LogoWrapper flexWrap={["wrap", , "nowrap"]} w={["full", , 2 / 5]}>
          <Box display={"flex"} alignItems={"center"}>
            <ClientImage src={lattice} alt="Lattice" />
            <ClientImage src={blissfully} alt="Blissfully" />
          </Box>
          <Box display={"flex"} alignItems={"center"} w={["full", , 3 / 5]}>
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
          button[role="tab"] {
            border: 0px;
            padding: 16px;
          }
          button[tabIndex="0"] {
            position: relative;
            padding-right: 32px;
            ::before {
              content: "ˇ";
              position: absolute;
              top: 15px;
              font-size: 50px;
              right: 6px;
            }
          }
        `}
      >
        <Tabs variant="soft-rounded" variantColor="green">
          <TabList
            maxW={1280}
            columns={[1, 3]}
            mx={"auto"}
            py={[6, , 10]}
            px={6}
            display={"flex"}
            justifyContent={"space-evenly"}
            border={"none"}
          >
            <Tab>
              <ClientImage
                style={{ maxWidth: "33%" }}
                src={lattice}
                alt="Lattice"
              />
            </Tab>
            <Tab>
              <ClientImage
                style={{ maxWidth: "33%" }}
                src={expel}
                alt="Expel"
              />
            </Tab>
            <Tab>
              <ClientImage
                style={{ maxWidth: "33%" }}
                src={bluecrew}
                alt="Bluecrew"
              />
            </Tab>
          </TabList>

          <TabPanels pb={[5, 7, 12]} style={{ "& div": { minHeight: 500 } }}>
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
            <Image image={signalImage} />

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
          <Box textAlign={"left"} mx={"auto"}>
            <Heading color={"textPrimary"} mt={0}>
              You're invited!
            </Heading>
            <Text fontWeight={"bold"}>
              Join us virtually at Twilio SIGNAL for:
            </Text>
            <List color={"textPrimary"}>
              <ListItem>
                Fireside chat with Patrick Malatack of Matrix Partners <br />
                (former VP of Product at Twilio)
              </ListItem>
              <ListItem>
                Livestream with Twilio's Developer Evangelist Lizzie Siegle
              </ListItem>
              <ListItem>
                Free white paper on adding SMS notifications to email
              </ListItem>
              <ListItem>
                Exclusive discount on all Courier pricing plans
              </ListItem>
            </List>
            <Text>RSVP for free below and enter our raffle!</Text>
            <Button
              as={'a'}

              href={'https://trycourier.typeform.com/to/TbEvSqOu'}
              textDecoration={'none'}
              px={8}
              py={0}
              bg={"#D5EEE9"}
              border={"none"}
              borderRadius={"full"}
              color={'textPrimary'}
            >
              RSVP
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
