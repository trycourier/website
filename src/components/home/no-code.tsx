import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";

const NoCode = styled.div`
  ${tw`absolute`}
  width: 130px;
`;

const NoCodeComponent: React.FC = () => {
  const { noCode } = useStaticQuery(graphql`
    query {
      noCode: file(relativePath: { eq: "no-code-stamp@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 130) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <NoCode>
      <Image image={noCode} />
    </NoCode>
  );
};

export default NoCodeComponent;
