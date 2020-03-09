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
    ${tw`m-0 p-0 text-4xl mt-2 md:mt-0`}
    font-weight: 600;
    color: #2f3e5a;
  }
  & p {
    ${tw`m-0 p-0 text-sm mt-6`}
  }
  & form {
    ${tw`m-0 p-0 mt-8 lg:mt-16`}
    & input {
      ${tw`border border-solid rounded-l-full px-6 py-1 text-sm w-24 md:w-32 lg:w-64 text-xs md:text-sm`}
      height: 30px;
      border-color: #d5d5d5;
      border-right: none;
    }
    & button {
      ${tw`border border-solid rounded-r-full px-4 py-2 text-white text-sm relative`}
      top: -1px;
      height: 40px;
      background-color: #9d3789;
      border-color: #9d3789;
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
          Design &amp; Deliver Notificaitons
        </h1>
        <p>
          Design once, deliver to any channel through one API
        </p>
        <label>Sign up and recieve <strong>10,000 free</strong> notifications every month</label>
        <form method="get" action="https://www.trycourier.app/register">
          <button>Google</button>
          <button>GitHub</button>
          <button>or email</button>
        </form>
      </HeroContent>
      <HeroImageWrapper>
        <Image image={img} />
      </HeroImageWrapper>
    </Hero>
  );
};

export default HeroComponent;
