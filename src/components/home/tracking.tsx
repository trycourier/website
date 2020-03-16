import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import BackgroundImage from "gatsby-background-image";
import Image from "../image";
import colors from "../../colors";
import { listStyles } from "../styles";
import { Desktop, Mobile } from "../container";

const Tracking = styled.section`
  ${tw`pt-24 pb-12 md:pt-24 mx-auto text-left px-4 md:px-0`}
`;

const TrackingSection = styled.div`
  ${tw`flex flex-col md:flex-row`}
`;

const TrackingText = styled.div`
  ${tw`md:w-1/2 md:pr-8 mt-16`}
  & h2 {
    ${tw`m-0 p-0 text-3xl mb-2`}
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-lg`}
    color: ${colors.textSecondary};
  }

  ${listStyles}
`;

const TrackingImageWrapper = styled.div`
  ${tw`md:w-1/2`}
`;

const TrackingComponent: React.FC = () => {
  const { bg, img, mobileImg} = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "cross-channel-green-circles-lines@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 660) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img: file(relativePath: { eq: "cards@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 660) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImg: file(relativePath: { eq: "tracking-mobile@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 643) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const bgStyle = {
    backgroundSize: "656px 647px",
    backgroundPosition: "center right",
  };

  return (
    <Tracking>
      <BackgroundImage fluid={bg.childImageSharp.fluid} style={bgStyle}>
        <TrackingSection>
          <TrackingText>
            <h2>Cross-Channel Engagement Tracking</h2>
            <p>
              Get insight on your performance across all channels
            </p>
            <ul>
              <li>Find the best channel for each user</li>
              <li>Compare deliverability across multiple providers</li>
              <li>Detailed event log for every user on every channel</li>
            </ul>
          </TrackingText>
          <TrackingImageWrapper>
            <Desktop>
              <Image image={img} />
            </Desktop>
            <Mobile>
              <Image image={mobileImg} />
            </Mobile>
          </TrackingImageWrapper>
        </TrackingSection>
      </BackgroundImage>
    </Tracking>
  );
};

export default TrackingComponent;
