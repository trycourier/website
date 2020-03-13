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

const Logo = styled.div`
  ${tw`ml-4 lg:ml-0`}
  max-width: 100px;
`;

const FooterComponent: React.FC = ({ children }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "courier-logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Footer>
        {children}
        <Logo>
          <Image image={logo} />
        </Logo>
        <p>
          {new Date().getFullYear()} trycourier.com, Inc. All rights reserved.<br />
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/disclosure">Responsible Disclosure Policy</a>
        </p>
      </Footer>
    </>
  );
};

export default FooterComponent;
