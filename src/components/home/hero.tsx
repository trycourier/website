import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

import channelsGroup from "../../images/channels-group.svg";
import RegisterationCTA from "./registeration-cta";

const Abs = styled.div`
  ${tw`absolute`}
  width: 50%;
`;

const Hero = styled.div`
  ${tw`flex py-4 md:py-12 md:pt-32 lg:pt-32 px-4 lg:px-0`}
  height: 72vh;
`;

const HeroContent = styled.div`
  ${tw`md:pr-16`}
  & h1 {
    ${tw`m-0 p-0 text-5xl mt-2 md:mt-0`}
    font-family: "Bebas Neue", sans-serif;
  }
  & p {
    ${tw`m-0 p-0 text-lg text-white mb-6`}
    font-weight: 100;
  }
  & label {
    ${tw`text-sm mt-8 mb-2 pb-2 lg:mt-16`}
    & strong {
      font-weight: 600;
    }
  }
`;

const HeroImageWrapper = styled.div`
  ${tw`p-4 pt-12 md:p-0`}
`;

const HeroComponent: React.FC = () => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
  
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  
  const { chat, chrome, email, slack, teams } = useStaticQuery(graphql`
    query {
      chat: file(relativePath: { eq: "parallax-chat@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chrome: file(relativePath: { eq: "parallax-chrome@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "parallax-email@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slack: file(relativePath: { eq: "parallax-slack@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teams: file(relativePath: { eq: "parallax-teams@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
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
        <p>Design once, deliver to any channel through one API</p>
        <label>
          Sign up and recieve <strong>10,000 free</strong> notifications every
          month
        </label>
        <RegisterationCTA />
      </HeroContent>
      <HeroImageWrapper onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <Abs>
            <Image image={chrome} />
          </Abs>
        </animated.div>
        <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
          <Abs>
            <Image image={email} />
          </Abs>
        </animated.div>
        <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
          <Abs>
            <Image image={slack} />
          </Abs>
        </animated.div>
        <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
          <Abs>
            <Image image={teams} />
          </Abs>
        </animated.div>
        <Abs>
          <img src={channelsGroup} />
        </Abs>
        <Abs>
          <Image image={chat} />
        </Abs>
      </HeroImageWrapper>
    </Hero>
  );
};

export default HeroComponent;
