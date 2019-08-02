/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import tw from "tailwind.macro";

import Header from "./header";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: Helvetica, sans-serif;
  }
`;

const Body = styled.div`
  ${tw`mx-auto max-w-4xl px-5 py-2 pt-0`}
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Body>
    </>
  );
};

export default Layout;
