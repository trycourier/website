import { Link, useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "./image";
import colors from "../colors";

import googleNav from "../images/google-nav.svg";
import githubNav from "../images/github-nav.svg";
import emailNav from "../images/email-nav.svg";

const NavContainer = styled.section`
  position: fixed;
  top: 0;
  z-index: 98;
  width: 100%;
  ${tw`text-white`}

  & nav {
    ${tw`flex justify-between mx-auto max-w-5xl lg:mt-4 pb-4`}
  }
`;

const MobileNavMenu = styled.ul`
  ${tw`fixed top-0 left-0 m-0 p-0 w-full h-full list-none`}
  z-index: 99;
  background-color: ${colors.berry};
  & li {
    ${tw`pt-8 px-8 text-xl`}
    & a {
      ${tw`text-white no-underline`}
    }
  }
  & li.close {
    ${tw`text-right text-sm relative`}
    top: -8px;
    left: 7px;
  }
`;

const NavigationItems = styled.ul`
  ${tw`m-0 p-0`}
  & li {
    ${tw`list-none hidden md:inline-block mt-1 align-top`}
    height: 24px;
    & a {
      ${tw`no-underline text-sm py-6 px-8`}
      color: ${colors.white};
      font-weight: 600;
      line-height: 30px;
      :hover{
        border-bottom: 3px solid ${colors.lightGray};
      }
      }
    }
  }
  & li.logo {
    ${tw`inline-block pl-4 md:pl-4 lg:pl-0 lg:pr-8`}
    width: 93px;
    height: 24px;
    margin-top: -24px;
  }
`;

const AccountButtons = styled.ul`
  ${tw`m-0 p-2 flex`}
  background: rgba(0,0,0,0.25);
  border-radius: 32px;
  list-style: none;
  & label {
    ${tw`text-sm pl-3 align-top`}
    margin-top: 12px;
  }
  & li {
    ${tw`list-none inline-block ml-3 hidden md:inline-block`}
    height: 36px;
  }

  & li.hamburger {
    ${tw`inline-block md:hidden cursor-pointer`}
    width: 30px;
    height: 30px;
  }
`;

const NavigationComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { hamburger, logo } = useStaticQuery(graphql`
    query {
      hamburger: file(relativePath: { eq: "deprecated/hamburger@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "courier-logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const toggleMenu = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    setShowModal(!showModal);
  };

  const hideMenu = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavContainer>
        <nav>
          <NavigationItems>
            <li className="logo">
              <Link to="/">
                <Image image={logo} />
              </Link>
            </li>

            <li>
              <Link to="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/#company">Company</Link>
            </li>
            <li>
              <Link to="/#community">Community</Link>
            </li>
            <li>
              <a href="https://docs.trycourier.com/" target="_blank">
                Documentation
              </a>
            </li>
          </NavigationItems>
          <AccountButtons>
            <label>Sign Up</label>
            <li>
              <a href="https://www.trycourier.app/login" target="_blank">
                <img src={googleNav} title="Google SSO" />
              </a>
            </li>
            <li>
              <a href="https://www.trycourier.app/login" target="_blank">
                <img src={githubNav} title="GitHub SSO" />
              </a>
            </li>
            <li>
              <a
                href="https://www.trycourier.app/register"
                target="_blank"
              >
                <img src={emailNav} title="Sign Up with Email" />
              </a>
            </li>
            <li className="hamburger">
              <a href="/" onClick={toggleMenu}>
                <Image image={hamburger} />
              </a>
            </li>
          </AccountButtons>
        </nav>
      </NavContainer>
      {showModal ? (
        <MobileNavMenu onClick={hideMenu}>
          <li className="close">
            <a href="/" onClick={toggleMenu}>
              close X
            </a>
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
            <a href="https://docs.trycourier.com/" target="_blank">
              Documentation
            </a>
          </li>
          <li>
            <a href="https://www.trycourier.app/login" target="_blank">
              Login
            </a>
          </li>
          <li>
            <a href="https://www.trycourier.app/register" target="_blank">
              Sign Up
            </a>
          </li>
        </MobileNavMenu>
      ) : null}
    </>
  );
};

export default NavigationComponent;
