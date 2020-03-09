import React from "react";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import ErrorBoundary from "./error-boundary";
import Navigation from "./navigation";

import colors from "../colors";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  div {
    margin: 0;
    padding: 0;
  }
  body, p {
    font-family: 'Proxima Nova', 'Nunito Sans', Roboto, sans-serif;
    font-weight: 100;
    cursor: default;
    background: ${colors.berry};
  }
  button {
    cursor: pointer;
  }
  button[disabled] {
    cursor: default;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Navigation />
      {children}
    </ErrorBoundary>
  );
};

export default Layout;
