import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "./image";

const Footer = styled.footer`
  > .gatsby-image-wrapper {
    ${tw`pb-16`}
  }
  & p {
    ${tw`text-xs`}
  }
`;

const Logo = styled.div`
  max-width: 100px;
`;

const FooterComponent: React.FC = ({ children }) => {
  const { logo, bg } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Logo@2x.png" }) {
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

  return (
    <Footer>
      <BackgroundImage fluid={bg.childImageSharp.fluid} style={{
        backgroundSize: '900px',
        backgroundPosition: 'bottom 175% center'
      }}>
        {children}
        <Logo><Image image={logo} /></Logo>
        <p>{new Date().getFullYear()} trycourier.com, Inc. All rights reserved.</p>
      </BackgroundImage>
    </Footer>
  );
};

export default FooterComponent;
