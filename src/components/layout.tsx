import React from "react";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import Navigation from "./navigation";
import Helmet from "react-helmet";

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
    <>
      <GlobalStyle />
      <Navigation />
      {children}
      {process.env.NODE_ENV === 'production' ? (
        <Helmet>
          <script>
            {"window.savvy=window.savvy||[],savvy.load=function(d,b){window.savvy.orgId=d,window.savvy.config=b=b||{};var e=b.forceSSL||'https:'===document.location.protocol,a=document.createElement('script');a.type='text/javascript',a.async=!0,a.src=(e?'https://savvy-prod.firebaseapp.com/js/generate?script=website_visitors&org_id=':'http://savvy-prod.firebaseapp.com/js/generate?script=website_visitors&org_id=')+d,console.log('a.src',a.src);var c=document.getElementsByTagName('script')[0];c.parentNode.insertBefore(a,c);},savvy.load('cju66UfGwvk8uiyVbwFf');"}
          </script>
        </Helmet>
      ) : null}
    </>
  );
};

export default Layout;
