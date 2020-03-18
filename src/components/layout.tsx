import React from "react";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import ErrorBoundary from "./error-boundary";
import Sticky from 'react-stickynode';
import Navigation from "./navigation";

import colors from "../colors";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  div {
    margin: 0;
    padding: 0;
  }
  body, p {
    font-family: 'Proxima Nova', 'Roboto', 'Nunito Sans', Roboto, sans-serif;
    font-weight: 100;
    cursor: default;
    color: ${colors.textSecondary};
  }
  h1, h2, h3{
    font-family: 'Bebas Neue', 'Impact', 'Helvetica Neue', sans-serif;
  }
  h4, h5, h6{
    font-family: 'Proxima Nova','Roboto', 'Nunito Sans', Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
  button[disabled] {
    cursor: default;
  }

  img { 
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .sticky-active nav { 
    transition-duration: 800ms;
    background: ${colors.berryGlass};
    backdrop-filter: blur(4px);
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Sticky top={0} innerZ={9999} activeClass="sticky-active">
        <Navigation />
      </Sticky>
      {children}
    </ErrorBoundary>
  );
};

export default Layout;
