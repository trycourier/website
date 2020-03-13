import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import BackgroundImage from "gatsby-background-image";

import colors from "../../colors";
import { listStyles } from "./styles";
const Tracking = styled.section`
  ${tw`pt-24 pb-12 md:py-24 mx-auto text-left px-4 md:px-0`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: #2f3e5a;
  }
  & p {
    ${tw`md:w-1/2`}
  }
  & a {
    ${tw`no-underline text-sm border border-solid py-3 px-8 rounded-full`}
    background-color: ${colors.berry};
    color: white;
    line-height: 60px;
  }
  ${listStyles}
`;

const TrackingComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "cross-channel-green-circles-lines@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 660) {
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
      <BackgroundImage fluid={img.childImageSharp.fluid} style={bgStyle}>
        <h2>Cross-Channel Engagement Tracking</h2>
        <p>
          Get insight on your performance across all channels
        </p>
        <ul>
          <li>Find the best channel for each user</li>
          <li>Compare deliverability across multiple providers</li>
          <li>Detailed event log for every user on every channel</li>
        </ul>
      </BackgroundImage>
    </Tracking>
  );
};

export default TrackingComponent;
