import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";
import googleLogo from "../../images/google-logo-white.svg";
import githubLogo from "../../images/github-logo-white.svg";
import channelsGroup from "../../images/channels-group.svg";
import colors from "../../colors";

const Abs = styled.div`
  position: absolute;
  width: 50%;
`;

const Button = styled.button`
  ${tw`rounded-full mr-2 px-4 py-2 text-white text-sm align-middle`}
  background: ${colors.googleBlue};
  border-color: ${colors.googleBlue};
  height: 36px;
  line-height: 24px;
  &.github {
    background: ${colors.berry};
    border-color: ${colors.berry};
  }
  & img {
    position: relative;
    top: -1px;
  }
  & label {
    position: relative;
    left: 6px;
    top: -7px;
  }
`

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
  & form {
    ${tw`my-2 p-3`}
    background-color: rgba(0,0,0,0.25);
    border-radius: 32px;

    & button {
      ${tw`rounded-full mr-2 px-4 py-2 text-white text-sm relative`}
      height: 36px;
      width: 170px;
    }
    & button.ghost {
      background-color: transparent;
      border: none;
      width: 90px;
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
        <form method="get" action="https://www.trycourier.app/register">
          <Button>
            <img src={googleLogo} /> 
            <label>Google</label>
          </Button>
          <Button className="github">
            <img src={githubLogo} />
            <label>GitHub</label>
          </Button>
          <button className="ghost">or email</button>
        </form>
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
