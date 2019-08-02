import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PurpleHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;
const OuterWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
const SiteHeader = styled.h1`
  margin: 0;
`;
const SiteHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header: React.FC<{
  siteTitle: string;
}> = ({ siteTitle = "" }) => (
  <PurpleHeader>
    <OuterWrapper>
      <SiteHeader>
        <SiteHeaderLink to="/">{siteTitle}</SiteHeaderLink>
      </SiteHeader>
    </OuterWrapper>
  </PurpleHeader>
);

export default Header;
