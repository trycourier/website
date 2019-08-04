import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Route = styled.section`
  ${tw`md:flex py-24`}
`;

const RouteText = styled.div`
  ${tw`md:w-1/3 pt-48`}
  & h2 {
    ${tw`m-0 p-0 text-3xl mb-8`}
  }
  & p {
    ${tw`m-0 p-0 text-sm mt-4`}
  }
`;

const RouteImageWrapper = styled.div`
  ${tw`md:w-2/3 text-right`}
`;

const RouteComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Illustration 2@2x.png" }) {
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
        <h2>Route with data</h2>
        <p>Courier automatically upgrades each notification to use the best channel available for each user. Use our visual rules designer to customize your delivery strategy or let Courier decide for you.</p>
      </RouteText>
      <RouteImageWrapper>
        <Image image={img} />
      </RouteImageWrapper>
    </Route>
  );
};

export default RouteComponent;
