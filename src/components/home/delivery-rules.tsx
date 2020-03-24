import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";
import NoCode from "./no-code";
import colors from "../../colors";
import { Desktop, Mobile } from "../container";

const Route = styled.section`
  ${tw`md:flex pt-32 px-4 md:pb-0 md:pt-24 lg:px-0 mx-auto`}
  color: ${colors.textSecondary};
`;

const RouteSection = styled.div`
  ${tw`flex flex-col`}
`;

const RouteText = styled.div`
  ${tw`w-full md:w-2/3 mt-16`}
  line-height: 32px;
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-md mb-4`}
  }
`;

const RouteImageWrapper = styled.div`
  ${tw`w-1/2 mx-auto md:w-full`}
`;

const RouteComponent: React.FC = () => {
  const { img, mobileImg } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "desktop-delivery@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImg: file(relativePath: { eq: "powered@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Route>
      <RouteSection>
        <NoCode />
        <RouteText>
          <h2>Powerful Delivery Rules</h2>
          <p>
            Effortlessly route each message to the right notification channel
            using a robust rules engine. Change channels without touching your
            code.
          </p>
        </RouteText>
        <RouteImageWrapper>
          <Desktop>
            <Image image={img} />
          </Desktop>
          <Mobile>
            <Image image={mobileImg} />
          </Mobile>
        </RouteImageWrapper>
      </RouteSection>
    </Route>
  );
};

export default RouteComponent;
