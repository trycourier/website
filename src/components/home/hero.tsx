import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Hero = styled.section`
  ${tw`md:flex py-4 md:py-12 lg:pt-24 px-4 lg:px-0`}
`;

const HeroContent = styled.div`
  ${tw`md:w-1/2 md:pr-16`}
  & h1 {
    ${tw`m-0 p-0 text-4xl`}
    font-weight: 600;
    color: #2f3e5a;
  }
  & p {
    ${tw`m-0 p-0 text-sm mt-6`}
  }
  & form {
    ${tw`m-0 p-0 mt-6 lg:mt-16`}
    & input {
      ${tw`border border-solid rounded-l-full px-6 py-1 text-sm w-24 xl:w-64`}
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
  ${tw`md:w-1/2 text-right p-4 pt-8 md:p-0`}
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
          Simplify your
          <br />
          notifications code
        </h1>
        <p>
          Courier automatically upgrades your outbound user notifications to use
          the best channel for each user. Email, mobile push, in-app, SMS, or
          chat &mdash; all from a single API.
        </p>
        <form method="get" action="https://www.trycourier.app/register">
          <input
            type="email"
            name="email"
            required
            placeholder="Your work email"
          />
          <button>Get started for free!</button>
        </form>
      </HeroContent>
      <HeroImageWrapper>
        <Image image={img} />
      </HeroImageWrapper>
    </Hero>
  );
};

export default HeroComponent;
