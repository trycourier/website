import React from "react";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import ErrorBoundary from "./error-boundary";
import Navigation from "./navigation";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body, p {
    font-family: 'Nunito Sans', Roboto, sans-serif;
    font-weight: 100;
    color: #344563
    cursor: default;
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
