import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

import channelsGroup from "../../images/channels-group.svg";
import RegisterationCTA from "./registeration-cta";

const Abs = styled.div`
  position: absolute;
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
      <HeroImageWrapper>
        <Abs>
          <img src={channelsGroup} />
        </Abs>
        <Abs>
          <Image image={chrome} />
        </Abs>
        <Abs>
          <Image image={chat} />
        </Abs>
        <Abs>
          <Image image={email} />
        </Abs>
        <Abs>
        <Image image={slack} />
        </Abs>
        <Abs>
          <Image image={teams} />
        </Abs>
      </HeroImageWrapper>
    </Hero>
  );
};

export default HeroComponent;
