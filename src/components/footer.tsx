import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "./image";

const Footer = styled.footer`
  ${tw`relative`}
  z-index: 2;
  & p {
    ${tw`ml-4 pb-4 lg:ml-0 text-xs`}
  }
`;

const Bg = styled.div`
  ${tw`absolute`}
  height: 300px;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  z-index: 1;
  > .gatsby-image-wrapper {
    ${tw`mx-auto`}
    width: 900px;
  }
`;

const Logo = styled.div`
  ${tw`ml-4 lg:ml-0`}
  max-width: 100px;
`;

const ErrorTest = styled.div`
  display: none;
  background-color: transparent;
  color: transparent;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background-color: red;
    color: white;
  }
`;

const FooterComponent: React.FC = ({ children }) => {
  const { logo, bg } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Courier Logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bg: file(relativePath: { eq: "Footer Design@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const triggerException = () => {
    throw new Error("Test Exception");
  }

  return (
    <>
      <Footer>
        {children}
        <ErrorTest onClick={triggerException}>!</ErrorTest>
        <Logo>
          <Image image={logo} />
        </Logo>
        <p>
          {new Date().getFullYear()} trycourier.com, Inc. All rights reserved.
        </p>
      </Footer>
      <Bg>
        <Image image={bg} />
      </Bg>
    </>
  );
};

export default FooterComponent;
