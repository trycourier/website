import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Hero = styled.section`
  ${tw`flex`}
`;

const HeroContent = styled.div`
  ${tw`w-1/2`}
  & h1 {
    ${tw`m-0 p-0 text-4xl`}
  }
  & p {
    ${tw`m-0 p-0 text-sm`}
  }
  & form {
    ${tw`m-0 p-0`}
    & input {
      ${tw`border border-solid rounded-l-full`}
      border-color: black;
      height: 30px;
    }
    & button {
      ${tw`border border-solid rounded-r-full`}
      border-color: black;
      height: 30px;
    }
  }
`;

const HeroImageWrapper = styled.div`
  ${tw`w-1/2 text-right`}
`;

const HeroComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Illustration 1@2x.png" }) {
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
        <h1>Simplify your<br />notifications code</h1>
        <p>
          Courier automatically upgrades your outbound user notifications to
          use the best channel for each user. Email, mobile push, in-app, SMS,
          or chat &mdash; all from a single API.
        </p>
        <form method="get" action="https://www.trycourier.app/register">
          <input type="email" name="email" placeholder="Your work email" />
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
