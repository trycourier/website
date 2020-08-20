import { Link } from "gatsby"; // useStaticQuery, graphql
import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../colors";

import Container from "../components/container";
import courierLogo from "../images/courier-logo.svg";
import googleNav from "../images/google-nav.svg";
import githubNav from "../images/github-nav.svg";
import emailNav from "../images/email-nav.svg";

import mobileMenu from "../images/hamburger.svg";

import {
  githubSignUpUrl,
  googleSignUpUrl,
  emailSignUpUrl,
  trackSignUp,
} from "../links";

const NavContainer = styled.section`
  position: fixed;
  top: 0;
  z-index: 98;
  width: 100%;
  ${tw`text-white`}
  & nav {
    ${tw`flex justify-between md:py-4 md:pr-4`}
  }
`;

const MobileNavMenu = styled.ul`
  ${tw`fixed top-0 left-0 m-0 p-4 w-full list-none`}
  min-height: 100vh;
  z-index: 99;
  background-color: ${colors.neutralGlass};
  backdrop-filter: blur(6px);
  & li {
    ${tw`pt-8 px-4 text-xl`}
    & a {
      ${tw`text-white no-underline`}
    }
  }
  & li.close {
    ${tw`text-right text-3xl md:text-4xl relative`}
    top: 0px;
    right: 16px;
  }
`;

const NavigationItems = styled.ul`
  ${tw`mt-1 p-0 bg-red whitespace-no-wrap`}
  & li {
    ${tw`list-none hidden md:inline-block mt-2 mr-2 align-top`}
    height: 24px;
    & a {
      ${tw`no-underline text-md py-2 px-4`}
      color: ${colors.white};
      font-weight: 600;
      line-height: 30px;
      border-radius: 9999px;
      transition-duration: 300ms;
      :hover{
        background: rgba(255,255,255,0.1);
      }
    }
  }
  & li.logo {
    ${tw`inline-block md:mr-8 md:pr-8`}
    width: 93px;
    height: 24px;
    & a {
      :hover{
        background: transparent;
      }
    }
  }
`;

const AccountButtons = styled.ul`
  ${tw`m-0 p-2 flex hidden md:inline-block whitespace-no-wrap ml-auto`}
  background: rgba(0,0,0,0.25);
  border-radius: 32px;
  list-style: none;
  height: 36px;
  & label {
    ${tw`text-sm pl-3 align-top hidden sm:inline-block`}
    margin-top: 10px;
  }
  & li {
    ${tw`list-none inline-block ml-3`}
    height: 36px;
    & :hover {
      filter: brightness(90%);
    }
  }
`;

const MobileButtons = styled.ul`
  ${tw`m-0 p-2 flex inline ml-auto md:hidden`}
  height: 36px;
  background: none;
  & li {
    ${tw`list-none inline-block mr-3 mt-2 hidden md:inline-block`}
    height: 36px;
    & :hover {
      filter: brightness(90%);
    }
  }
  & li.hamburger {
    ${tw`inline-block md:hidden cursor-pointer`}
  }
`;

export const Flex = styled.div`
  ${tw`flex`}
`;

const NavigationComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
          <Container>
            <Flex>
              <NavigationItems>
                <li className="logo">
                  <Link to="/">
                    <img src={courierLogo} alt="Courier" />
                  </Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <a href="https://docs.courier.com/" rel="noreferrer" target="_blank">
                    Documentation
                  </a>
                </li>
              </NavigationItems>
              <AccountButtons>
                <label>Sign Up</label>
                <li>
                  <a
                    href={googleSignUpUrl}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => trackSignUp("Google")}
                  >
                    <img src={googleNav} alt="Google SSO" />
                  </a>
                </li>
                <li>
                  <a
                    href={githubSignUpUrl}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => trackSignUp("GitHub")}
                  >
                    <img src={githubNav} alt="GitHub SSO" />
                  </a>
                </li>
                <li>
                  <a
                    href={emailSignUpUrl}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => trackSignUp("Email")}
                  >
                    <img src={emailNav} alt="Sign Up with Email" />
                  </a>
                </li>
              </AccountButtons>
              <MobileButtons>
                <li className="hamburger">
                  <a href="/" onClick={toggleMenu}>
                    <img src={mobileMenu} alt="+" />
                  </a>
                </li>
              </MobileButtons>
            </Flex>
          </Container>
        </nav>
      </NavContainer>
      {showModal ? (
        <MobileNavMenu onClick={hideMenu}>
          <li className="close">
            <a href="/" onClick={toggleMenu}>
              &times;
            </a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <a
              href="https://docs.courier.com/"
              rel="noreferrer"
              target="_blank"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.trycourier.app/login"
              rel="noreferrer"
              target="_blank"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="https://www.trycourier.app/register"
              rel="noreferrer"
              target="_blank"
            >
              Sign Up
            </a>
          </li>
        </MobileNavMenu>
      ) : null}
    </>
  );
};

export default NavigationComponent;
