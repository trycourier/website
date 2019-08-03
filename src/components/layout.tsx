import React from "react";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import Navigation from "./navigation";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: Helvetica, sans-serif;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
