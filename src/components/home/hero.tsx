import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import tw from "tailwind.macro";
import colors from "../../colors";
import Container from "../container";
import Image from "../image";
import BackgroundImage from "gatsby-background-image";

const Abs = styled.div`
  position: absolute;
  width: 50%;
`;

const Hero = styled(Container)`
  ${tw`py-4 md:py-12 md:pt-4 lg:pt-24 px-4 lg:px-0`}
  height: 50vh;
  display: flex;
`;

const HeroContent = styled.div`
  ${tw`md:pr-16`}
  & h1 {
    ${tw`m-0 p-0 text-5xl mt-2 md:mt-0`}
    font-family: "Bebas Neue", sans-serif;
  }
  & p {
    ${tw`m-0 p-0 text-lg mb-6`}
    font-weight: 100;
  }
  & label {
    ${tw`text-sm mt-8 mb-2 lg:mt-16`}
    & strong {
      font-weight: 600;
    }
  }
  & form {
    ${tw`m-0 p-3`}
    background-color: rgba(0,0,0,0.25);
    border-radius: 32px;

    & button {
      ${tw`border border-solid rounded-full mr-2 px-4 py-2 text-white text-sm relative`}
      height: 36px;
    }
    & button.ghost {
      background-color: transparent;
      border: none;
    }
  }
`;

const HeroImageWrapper = styled.div`
  ${tw`p-4 pt-12 md:p-0`}
`;

const HeroComponent: React.FC = () => {
  const { bg, chat, chrome, email, slack, teams } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bgs/hero-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    <BackgroundImage
      Tag="section"
      fluid={bg.childImageSharp.fluid}
      backgroundColor={colors.berry}
    >
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
        <form method="get" action="https://www.trycourier.app/register">
          <button>Google</button>
          <button>GitHub</button>
          <button className="ghost">or email</button>
        </form>
      </HeroContent>
      <HeroImageWrapper>
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
    </BackgroundImage>
  );
};

export default HeroComponent;
