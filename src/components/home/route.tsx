import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

import NoCode from "./no-code";

const Route = styled.section`
  ${tw`md:flex py-8 pb-16 md:py-24 px-4 lg:px-0`}
`;

const RouteText = styled.div`
  ${tw`md:w-1/3`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:mb-8`}
  }
  & p {
    ${tw`m-0 p-0 text-sm mt-4`}
  }
`;

const RouteImageWrapper = styled.div`
  ${tw`md:w-2/3 text-right mt-8 md:mt-0`}
`;

const RouteComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "route-illustration@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Route>
      <RouteText>
        <NoCode />
        <h2>Powerful Delivery Rules</h2>
        <p>
          Effortlessly route each message to the right notificaiton channel using a robust rules engine.
          Change channels without touching your code.
        </p>
      </RouteText>
      <RouteImageWrapper>
        <Image image={img} />
      </RouteImageWrapper>
    </Route>
  );
};

export default RouteComponent;
