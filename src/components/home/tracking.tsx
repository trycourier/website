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
  ${tw`px-4 pt-4 pb-0 md:pt-48 mx-auto text-left`}
`;

const TrackingSection = styled.div`
  ${tw`flex flex-col md:flex-row`}
`;

const TrackingText = styled.div`
  ${tw`w-3/4 mx-auto md:w-1/2 md:pr-8 mt-32 md:mt-0 pt-16`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl mb-2`}
    font-weight: 200;
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
  margin: -16px;
`;

const TrackingComponent: React.FC = () => {
  const { bg, img, mobileImg } = useStaticQuery(graphql`
    query {
      bg: file(
        relativePath: { eq: "cross-channel-green-circles-lines@2x.png" }
      ) {
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
      mobileImg: file(relativePath: { eq: "morgan@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1242) {
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
      <Desktop>
        <BackgroundImage fluid={bg.childImageSharp.fluid} style={bgStyle}>
          <TrackingSection>
            <TrackingText>
              <h2>Cross-Channel Engagement Tracking</h2>
              <p>Get insight on your performance across all channels</p>
              <ul>
                <li>Find the best channel for each user</li>
                <li>Compare deliverability across multiple providers</li>
                <li>Detailed event log for every user on every channel</li>
              </ul>
            </TrackingText>
            <TrackingImageWrapper>
              <Image image={img} />
            </TrackingImageWrapper>
          </TrackingSection>
        </BackgroundImage>
      </Desktop>
      <Mobile>
        <TrackingSection>
          <TrackingText>
            <h2>Cross-Channel Engagement Tracking</h2>
            <p>Get insight on your performance across all channels</p>
            <ul>
              <li>Find the best channel for each user</li>
              <li>Compare deliverability across multiple providers</li>
              <li>Detailed event log for every user on every channel</li>
            </ul>
          </TrackingText>
          <TrackingImageWrapper>
            <Image image={mobileImg} />
          </TrackingImageWrapper>
        </TrackingSection>
      </Mobile>
    </Tracking>
  );
};

export default TrackingComponent;
