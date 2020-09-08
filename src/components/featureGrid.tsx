import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "./image";
import colors from "../colors";
import { listStyles } from "./styles";

const FeatureGrid = styled.section<{ imageFirst: boolean }>`
  ${tw`flex  px-4 pt-0 mt-8 md:my-0 md:pb-16 lg:px-0`}
  ${(props) =>
    props.imageFirst
      ? tw`flex-col-reverse md:flex-row-reverse`
      : tw`flex-col md:flex-row`}
`;

const FeatureGridText = styled.div<{ imageFirst: boolean }>`
  ${tw`w-3/4 md:w-1/2 mx-auto md:pr-8 mt-8`}
  ${(props) => (props.imageFirst ? tw`md:pl-8` : tw`md:pr-8`)}
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

const FeatureGridImageWrapper = styled.div`
  ${tw`md:w-1/2`}
`;

const FeatureGridComponent: React.FC<{ imageFirst: boolean }> = ({
  imageFirst = true,
}) => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "notification-design-studio@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <FeatureGrid imageFirst={imageFirst}>
      <FeatureGridText imageFirst={imageFirst}>
        <h2>One API call</h2>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </FeatureGridText>
      <FeatureGridImageWrapper>
        <Image image={img} />
      </FeatureGridImageWrapper>
    </FeatureGrid>
  );
};

export default FeatureGridComponent;
