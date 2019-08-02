/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import "./layout.css";

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
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
