import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";
import NoCode from "./no-code";
import colors from "../../colors";
import { Desktop, Mobile } from "../container";

const DeliveryRules = styled.section`
  ${tw`flex flex-col pt-32 px-4 md:pb-0 md:pt-24 lg:px-0 mx-auto`}
  color: ${colors.textSecondary};
`;

const DeliveryRulesText = styled.div`
  ${tw`relative w-full md:w-2/3 mt-16`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl`}
    font-weight: 200;
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 my-2`}
    font-size: 18px;
    line-height: 22px;
  }
`;

const DeliveryRulesImageWrapper = styled.div`
  ${tw`w-1/2 mx-auto md:w-full`}
`;

const DeliveryRulesComponent: React.FC = () => {
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
    <DeliveryRules>
      <div style={{ position: "relative", top: 25, left: -55 }}>
        <NoCode />
      </div>
      <DeliveryRulesText>
        <h2>Powerful Delivery Rules</h2>
        <p>
          Effortlessly route each message to the right notification channel
          using a robust rules engine. Change channels without touching your
          code.
        </p>
      </DeliveryRulesText>
      <DeliveryRulesImageWrapper>
        <Desktop>
          <Image image={img} />
        </Desktop>
        <Mobile>
          <Image image={mobileImg} />
        </Mobile>
      </DeliveryRulesImageWrapper>
    </DeliveryRules>
  );
};

export default DeliveryRulesComponent;
