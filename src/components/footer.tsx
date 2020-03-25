import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../colors";

import courierLogo from "../images/courier-logo.svg";
import twitterLogo from "../images/social-twitter.svg";
import linkedInLogo from "../images/social-linkedin.svg";
import facebookLogo from "../images/social-fb.svg";
import instagramLogo from "../images/social-instagram.svg";

const Footer = styled.footer`
  ${tw`md:flex text-white p-4 md:px-0 pt-16`}
  overflow: hidden;
`;

const LogoSection = styled.div`
  ${tw`md:w-1/8 md:ml-6 md:pr-8`}
`;
const Logo = styled.div`
  ${tw`mt-4 ml-2`}
  max-width: 100px;
`;

const LinkSection = styled.div`
  ${tw`md:w-7/8`}
`;
const NavLinks = styled.div`
  ${tw`flex`}
`;

const NavigationItems = styled.ul`
  ${tw`mt-1 p-0`}
  & li {
    ${tw`list-none inline-block mt-2 align-top`}
    height: 24px;
    & a {
      ${tw`no-underline text-white text-md p-2 md:px-8 mr-4`}
      color: ${colors.white};
      font-weight: 700;
      line-height: 30px;
      border-radius: 9999px;
      :hover{
        background: rgba(255,255,255,0.1);
      }
    }
  }
  & li.logo {
    ${tw`inline-block pl-4 md:pl-4 lg:pl-0 lg:pr-8`}
    width: 93px;
    height: 24px;
    margin-top: -20px;
    & a {
      :hover{
        background: transparent;
      }
    }
  }
`;

const SocialLinks = styled.div`
  ${tw`flex md:ml-6`}
  a {
    ${tw`inline-block p-2`}
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const DetailLinks = styled.div`
  p {
    ${tw`flex flex-col md:flex-row`}
  }
  a {
    ${tw`no-underline inline-block text-white text-sm p-2 md:px-8`}
    border-radius: 9999px;
    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const FooterComponent: React.FC = () => {
  return (
    <>
      <Footer>
        <LogoSection>
          <Logo>
            <img src={courierLogo} alt="Courier" />
          </Logo>
        </LogoSection>
        <LinkSection>
          <NavLinks>
            <NavigationItems>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              {/* <li>
                <Link to="/#company">Company</Link>
              </li>
              <li>
                <Link to="/#community">Community</Link>
              </li> */}
              <li>
                <a href="https://docs.trycourier.com/" target="_blank">
                  Documentation
                </a>
              </li>
            </NavigationItems>
          </NavLinks>
          <SocialLinks>
            <a href="https://www.twitter.com/trycourier" target="_blank">
              <img src={twitterLogo} style={{ marginTop: 2 }} alt="twitter"/>
            </a>
            <a href="https://www.linkedin.com/trycourier" target="_blank">
              <img src={linkedInLogo} alt="LinkedIn"/>
            </a>
            <a href="https://www.facebook.com/trycourier" target="_blank">
              <img src={facebookLogo} alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/trycourier" target="_blank">
              <img src={instagramLogo} alt="Instagram"/>
            </a>
          </SocialLinks>
          <DetailLinks>
            <p>
              <a href="/privacy">Privacy&nbsp;Policy</a>
              {/* <a href="/terms">Terms&nbsp;of&nbsp;Service</a> */}
              <a href="/disclosure">Responsible&nbsp;Disclosure&nbsp;Policy</a>
            </p>
          </DetailLinks>
        </LinkSection>
      </Footer>
    </>
  );
};

export default FooterComponent;
