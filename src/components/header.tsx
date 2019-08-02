import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { theme } from "../../tailwind";

const PurpleHeader = styled.header`
  ${tw`mb-5`}
  background-color: ${theme.extend.colors.primary};
`;
const OuterWrapper = styled.div`
  ${tw`mx-auto max-w-4xl px-4 py-5`}
`;
const SiteHeader = styled.h1`
  ${tw`m-0`}
`;
const SiteHeaderLink = styled(Link)`
  ${tw`text-white no-underline`}
`;

const Header: React.FC<{
  siteTitle: string;
}> = ({ siteTitle }) => (
  <PurpleHeader>
    <OuterWrapper>
      <SiteHeader>
        <SiteHeaderLink to="/">{siteTitle}</SiteHeaderLink>
      </SiteHeader>
    </OuterWrapper>
  </PurpleHeader>
);

export default Header;
