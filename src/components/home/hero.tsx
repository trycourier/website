import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Hero = styled.section`
  ${tw`md:flex py-4 md:py-12 md:pt-4 lg:pt-24 px-4 lg:px-0`}
`;

const HeroContent = styled.div`
  ${tw`md:w-1/2 md:pr-16`}
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
  ${tw`md:w-1/2 text-right p-4 pt-12 md:p-0`}
`;

const HeroComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Illustration@2x.png" }) {
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
        <p>
          Design once, deliver to any channel through one API
        </p>
        <label>Sign up and recieve <strong>10,000 free</strong> notifications every month</label>
        <form method="get" action="https://www.trycourier.app/register">
          <button>Google</button>
          <button>GitHub</button>
          <button className="ghost">or email</button>
        </form>
      </HeroContent>
      <HeroImageWrapper>
        <Image image={img} />
      </HeroImageWrapper>
    </Hero>
  );
};

export default HeroComponent;
