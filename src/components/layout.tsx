import React from "react";
import { Global, css } from "@emotion/core";
import normalize from "styled-normalize";
import Sticky from "react-stickynode";

import ErrorBoundary from "./error-boundary";
import Navigation from "./navigation";
import { Banner } from "./banner";

import colors from "../colors";

// @ts-ignore
const GlobalStyle = () => (
  <Global
    // @ts-ignore
    styles={css`
      @media only screen and (-webkit-min-device-pixel-ratio: 1.25),
        only screen and (min-device-pixel-ratio: 1.25),
        only screen and (min-resolution: 200dpi),
        only screen and (min-resolution: 1.25dppx) {
        -webkit-font-smoothing: subpixel-antialiased;
      }

      div {
        margin: 0;
        padding: 0;
      }

      html,
      body {
        overflow-x: hidden;
        max-width: 100%;
        -webkit-font-smoothing: antialiased;
      }

      body,
      p {
        font-family: "Proxima Nova", "Nunito Sans", Roboto, sans-serif;
        font-weight: 100;
        cursor: default;
        color: ${colors.textSecondary};
      }
      h1,
      h2,
      h3 {
        font-family: "Bebas Neue", "Impact", "Helvetica Neue", sans-serif;
      }
      h4,
      h5,
      h6 {
        font-family: "Proxima Nova", "Nunito Sans", Roboto, sans-serif;
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
        background: ${colors.neutralGlass};
        backdrop-filter: blur(4px);
      }
      ${normalize}
    `}
  />
);

const Layout: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      {true ? <Banner /> : null}
      <Sticky top={0} innerZ={9999} activeClass="sticky-active">
        <Navigation />
      </Sticky>
      {children}
    </ErrorBoundary>
  );
};

export default Layout;
