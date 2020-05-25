import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";
import colors from "../../colors";

import channelsGroup from "../../images/channels-group.svg";
import RegistrationCTA from "../shared/registration-cta";

const Abs = styled(animated.div)`
  position: absolute;
  width: 50%;
  height: 50%;
`;

const Hero = styled.div`
  ${tw`text-white md:flex md:flex-row p-4 md:pt-32 md:py-12 lg:pt-32 lg:px-0`}
  height: 100%;
  max-height: 800px;
  min-height: 700px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  ${tw`relative py-4 md:pr-16 mt-16 sm:mt-16`}
  color: ${colors.white};
  z-index: 5;
  text-shadow: 1px 1px 4px ${colors.berry};
  & h1 {
    ${tw`m-0 p-0 mt-2 md:mt-0`}
    font-family: "Bebas Neue", sans-serif;
    font-size: 50px;
    line-height: 50px;
    font-weight: 200;
    color: ${colors.white};
  }
  & p {
    ${tw`m-0 p-0 text-white my-2 mr-32 md:mr-0`}
    font-weight: 100;
    font-size: 22px;
    line-height: 24px;
    color: ${colors.white};
  }
  & label {
    ${tw`text-sm mt-8 mb-2 pb-2 lg:mt-16 whitespace-no-wrap`}
    & strong {
      font-weight: 700;
    }
  }
`;

const HeroImageWrapper = styled.div`
  ${tw`hidden md:block p-4 pt-12 md:p-0`}
`;

const MobileImageWrapper = styled.div`
  ${tw`absolute block md:hidden`}
  width: 50%;
  bottom: 50px;
  right: 0px;
  @media (max-width: 768px) {
    width: 65%;
    bottom: 200px;
  }
`;

const HeroCTA = styled.div`
  ${tw`relative text-center md:mt-16 md:text-left`}
  margin-top: 40vw;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    & label {
      margin-top: 0px;
    }
    
  }
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

  const {
    chat,
    chrome,
    email,
    slack,
    teams,
    mobileImg,
  } = useStaticQuery(graphql`
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
      <MobileImageWrapper>
        <Image image={mobileImg} />
      </MobileImageWrapper>

      <HeroContent>
        <h1>
          The Smartest Way to
          <br />
          Design &amp; Deliver Notifications
        </h1>
        <p>Design once, deliver to any channel through one API</p>
        <HeroCTA>
          <label>
            Sign up and receive <strong>10,000 free</strong> notifications every
            month
          </label>
          <RegistrationCTA />
        </HeroCTA>
      </HeroContent>

      <HeroImageWrapper
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Abs
          style={{
            transform: props.xy.interpolate(trans1),
            width: 400,
            top: 225,
            right: 50,
          }}
        >
          <img src={channelsGroup} />
        </Abs>
        <Abs
          style={{
            transform: props.xy.interpolate(trans4),
            top: 95,
            right: 50,
          }}
        >
          <Image image={teams} />
        </Abs>
        <Abs
          style={{
            transform: props.xy.interpolate(trans5),
            width: 565,
            top: 200,
          }}
        >
          <Image image={email} />
        </Abs>
        <Abs
          style={{
            transform: props.xy.interpolate(trans2),
            width: 380,
            top: 290,
            right: 200,
          }}
        >
          <Image image={chat} />
        </Abs>
        <Abs
          style={{
            transform: props.xy.interpolate(trans2),
            top: 75,
            right: -50,
          }}
        >
          <Image image={chrome} />
        </Abs>
        <Abs
          style={{
            transform: props.xy.interpolate(trans3),
            top: 540,
            right: -120,
          }}
        >
          <Image image={slack} />
        </Abs>
      </HeroImageWrapper>
    </Hero>
  );
};

export default HeroComponent;
