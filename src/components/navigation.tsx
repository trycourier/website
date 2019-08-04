import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../colors";

const NavContainer = styled.section`
  ${tw`bg-white`}
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;

  & nav {
    ${tw`flex justify-between mx-auto max-w-5xl mt-8`}
  }
`;

const NavigationItems = styled.ul`
  ${tw`m-0 p-0`}
  & li {
    ${tw`list-none hidden md:inline-block mr-4 lg:mr-8 align-top`}
    height: 60px;
    & a {
      ${tw`no-underline text-xs`}
      color: ${colors.berry};
      line-height: 60px;
    }
  }
  & li.logo {
    ${tw`inline-block`}
  }
`;

const NavItemSeparator = styled.div`
  ${tw`border-solid border-0 border-r-2 align-middle`}
  height: 20px;
  border-color: #e9e9e9;
  margin-top: 20px;
`;

const AccountButtons = styled.ul`
  ${tw`m-0 p-0 mr-8 lg:mr-0`}
  & li {
    ${tw`list-none inline-block ml-3 align-top`}
    height: 60px;
  }
`;

const ActionButtonLink = styled.a<{
  primary?: boolean;
}>`
  ${tw`no-underline text-xs border border-solid py-2 px-6 rounded-full`}
  color: ${props => props.primary ? "white": colors.berry};
  background-color: ${props => props.primary ? colors.berry : "white"};
  line-height: 60px;
`;

type GatsbyImage = {
  childImageSharp: {
    fluid: {
      base64: string;
      aspectRatio: number;
      src: string;
      srcSet: string;
      sizes: string;
    }
  }
};

const NavigationComponent: React.FC = () => {
  const { logo }: { logo: GatsbyImage } = useStaticQuery(graphql`
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

  return (
    <NavContainer>
      <nav>
        <NavigationItems>
          <li className="logo">
            <Link to="/">
              <img src={logo.childImageSharp.fluid.src} srcSet={logo.childImageSharp.fluid.srcSet} width={150} />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/#company">Company</Link>
          </li>
          <li>
            <NavItemSeparator />
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <a href="https://docs.trycourier.com/" target="_blank">
              Documentation
            </a>
          </li>
        </NavigationItems>
        <AccountButtons>
          <li>
            <ActionButtonLink href="https://www.trycourier.app/login">
              Login
            </ActionButtonLink>
          </li>
          <li>
            <ActionButtonLink href="https://www.trycourier.app/register" primary={true}>
              Sign Up
            </ActionButtonLink>
          </li>
        </AccountButtons>
      </nav>
    </NavContainer>
  );
};

export default NavigationComponent;
