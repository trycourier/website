import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../colors";

const Nav = styled.nav`
  ${tw`flex justify-between mx-auto max-w-5xl mt-8`}
`;

const NavigationItems = styled.ul`
  ${tw`m-0 p-0`}
`;

const NavItem = styled.li`
  ${tw`list-none inline-block mr-8 align-top`}
  height: 60px;
`;

const NavItemLink = styled(Link)`
  ${tw`no-underline text-xs`}
  color: ${colors.berry};
  line-height: 60px;
`;
const NavItemLinkExternal = styled.a`
  ${tw`no-underline text-xs`}
  color: ${colors.berry};
  line-height: 60px;
`;

const NavItemSeparator = styled.div`
  ${tw`border-solid border-0 border-r-2 align-middle`}
  height: 20px;
  border-color: #e9e9e9;
  margin-top: 20px;
`;

const AccountButtons = styled.ul`
  ${tw`m-0 p-0`}
`;

const AccountButton = styled.li`
  ${tw`list-none inline-block ml-3 align-top`}
  height: 60px;
`;

const ActionButtonLink = styled.a`
  ${tw`no-underline text-xs border border-solid py-2 px-6 rounded-full`}
  color: ${colors.berry};
  line-height: 60px;
`;
const ActionButtonLinkPrimary = styled.a`
  ${tw`no-underline text-xs border border-solid py-2 px-6 rounded-full`}
  background-color: ${colors.berry};
  color: white;
  line-height: 60px;
`;

type GatsbyImage = {
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

const HeaderComponent: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logo: GatsbyImage = data.logo.childImageSharp.fluid;

  return (
    <Nav>
      <NavigationItems>
        <NavItem>
          <Link to="/">
            <img src={logo.src} srcSet={logo.srcSet} width={150} />
          </Link>
        </NavItem>
        <NavItem>
          <NavItemLink to="/">Home</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/#pricing">Pricing</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/#company">Company</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemSeparator />
        </NavItem>
        <NavItem>
          <NavItemLink to="/">Blog</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLinkExternal href="https://docs.trycourier.com/">
            Documentation
          </NavItemLinkExternal>
        </NavItem>
      </NavigationItems>
      <AccountButtons>
        <AccountButton>
          <ActionButtonLink href="https://www.trycourier.app/login">
            Login
          </ActionButtonLink>
        </AccountButton>
        <AccountButton>
          <ActionButtonLinkPrimary href="https://www.trycourier.app/register">
            Sign Up
          </ActionButtonLinkPrimary>
        </AccountButton>
      </AccountButtons>
    </Nav>
  );
};

export default HeaderComponent;
