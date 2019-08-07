import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Investors = styled.section`
  ${tw`py-24 pb-48 text-center`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: #2f3e5a;
  }
`;

const InvestorLogos = styled.ul`
  ${tw`m-0 p-0 list-none md:flex mx-auto md:w-2/3`}
`;

const Logo = styled.li`
  ${tw`m-0 p-0 inline md:w-1/2`}
`;

const InvestorsComponent: React.FC = () => {
  const { matrix, yc } = useStaticQuery(graphql`
    query {
      matrix: file(relativePath: { eq: "Matrix Partners Logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yc: file(relativePath: { eq: "Y Combinator Logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Investors>
      <h2>Our investors</h2>
      <InvestorLogos>
        <Logo><a href="https://www.matrixpartners.com/" target="_blank"><Image image={matrix} /></a></Logo>
        <Logo><a href="https://www.ycombinator.com/" target="_blank"><Image image={yc} /></a></Logo>
      </InvestorLogos>
    </Investors>
  );
}

export default InvestorsComponent;