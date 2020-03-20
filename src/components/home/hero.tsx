import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";
import colors from "../../colors";

import channelsGroup from "../../images/channels-group.svg";
import RegistrationCTA from "./registration-cta";

import { Desktop, Mobile } from "../container";

const Abs = styled(animated.div)`
  position: absolute;
  width: 50%;
  height: 50%;
`;

const StyledImage = styled(Image)``;

const Hero = styled.div`
  ${tw`md:flex md:flex-row p-4 md:pt-32 md:py-12 lg:pt-32 lg:px-0`}
  height: 100%;
  max-height: 800px;
  min-height: 700px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  ${tw`absolute md:relative p-4 md:pr-16 mt-16 sm:mt-16`}
  color: ${colors.white};
  z-index: 5;
  text-shadow: 1px 1px 4px ${colors.berry};
  & h1 {
    ${tw`m-0 p-0 text-5xl mt-2 md:mt-0`}
    font-family: "Bebas Neue", sans-serif;
  }
  & p {
    ${tw`m-0 p-0 text-lg text-white my-6`}
    font-weight: 100;
    line-height: 14px;
  }
  & label {
    ${tw`text-sm mt-8 mb-2 pb-2 lg:mt-16`}
    & strong {
      font-weight: 700;
    }
  }
`;

const HeroImageWrapper = styled.div`
  ${tw`p-4 pt-12 md:p-0`}
`;

const MobileHeroContent = styled.div`
  ${tw`relative`}
  top: 320px;
  color: ${colors.white};
`;

const MobileImageWrapper = styled.div`
  background: transparent;
  position: absolute;
  width: 75%;
  height: 200px;
  bottom: -100px;
  right: -16px;
`;

const HeroCTA = styled.div`
  position: relative;
  top: 190px;
`;

const HeroComponent: React.FC = () => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 15 - 5}px,${y / 15 - 10}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 25 - 15}px,${y / 55 - 5}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 55}px,${y / 10}px,0)`;
  const trans5 = (x, y) => `translate3d(${x / 15 + 10}px,${y / 40 + 10}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [-400, 150],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { chat, chrome, email, slack, teams, mobileImg } = useStaticQuery(graphql`
    query {
      chat: file(relativePath: { eq: "parallax-chat@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chrome: file(relativePath: { eq: "parallax-chrome@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "parallax-email@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slack: file(relativePath: { eq: "parallax-slack@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teams: file(relativePath: { eq: "parallax-teams@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImg: file(relativePath: { eq: "header-mobile@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 828) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Hero>
      
      <HeroContent>
        <h1>
          The Smartest Way to
          <br />
          Design &amp; Deliver Notifications
        </h1>
        <p>Design once, deliver to any channel<Mobile><br/></Mobile> through one API</p>
        <HeroCTA>
          <label>
            Sign up and recieve <strong>10,000 free</strong> notifications every
            month
          </label>
          <RegistrationCTA />
        </HeroCTA>
      </HeroContent>
      <Desktop>
        <HeroImageWrapper
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <Abs style={{ transform: props.xy.interpolate(trans1), width: 400, top: 225, right: 50}}>
            <img src={channelsGroup} />
          </Abs>
          <Abs style={{ transform: props.xy.interpolate(trans4), top: 95, right: 50 }}>
            <StyledImage image={teams} />
          </Abs>
          <Abs style={{ transform: props.xy.interpolate(trans5), width: 565, top: 200 }}> 
            <StyledImage image={email} />
          </Abs>
          <Abs style={{ transform: props.xy.interpolate(trans2), width: 380, top: 290, right: 200 }}>
            <StyledImage image={chat} />
          </Abs>
          <Abs style={{ transform: props.xy.interpolate(trans2), top: 75, right: -50 }}>
            <StyledImage image={chrome} />
          </Abs>
          <Abs style={{ transform: props.xy.interpolate(trans3), top: 540, right: -120 }}>
            <StyledImage image={slack} />
          </Abs>
        </HeroImageWrapper>
      </Desktop>
      <Mobile>
        <MobileHeroContent>
          <MobileImageWrapper>
            <Image image={mobileImg} />
          </MobileImageWrapper>
        </MobileHeroContent>
      </Mobile>
    </Hero>
  );
};

export default HeroComponent;
