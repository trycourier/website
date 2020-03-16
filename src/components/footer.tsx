import React from "react";
import { Link } from "gatsby"; // useStaticQuery, graphql
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../colors";
// import Image from "./image";

import courierLogo from "../images/courier-logo.svg";
import twitterLogo from "../images/social-twitter.svg";
import linkedInLogo from "../images/social-linkedin.svg";
import facebookLogo from "../images/social-fb.svg";
import instagramLogo from "../images/social-instagram.svg";

const Footer = styled.footer`
  ${tw`md:flex text-white p-8 md:px-0`}
`;

const LogoSection = styled.div`
  ${tw`md:w-1/5 md:pr-8`}
`
const Logo = styled.div`
  ${tw`mt-4`}
  max-width: 100px;
`;

const LinkSection = styled.div`
  ${tw`md:w-4/5`}
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
      ${tw`no-underline text-white text-md py-6 md:px-8 mr-4`}
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
  ${tw`flex md:ml-4`}
  a {
    ${tw`inline-block p-4`}
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    :hover{
      background: rgba(255,255,255,0.1);
    }
  }
`;

const DetailLinks = styled.div`
  p { 
    ${tw`flex flex-col md:flex-row`}
  }
  a {
    ${tw`no-underline text-white text-sm py-3 md:py-6 md:px-8`}
    border-bottom: 2px solid transparent;
    :hover{
      border-bottom: 2px solid ${colors.berrywhite};
    }
  }
`;

const FooterComponent: React.FC = () => {
  // const { logo, twitter, linkedIn, fb, instagram } = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "courier-logo@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     twitter: file(relativePath: { eq: "social-twitter@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 40) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     linkedIn: file(relativePath: { eq: "social-linkedIn@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 40) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     fb: file(relativePath: { eq: "social-fb@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 40) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     instagram: file(relativePath: { eq: "social-instagram@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 40) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <Footer>
        <LogoSection>
          <Logo>
            {/* <Image image={logo} /> */}
            <img src={courierLogo} />
          </Logo>
        </LogoSection>
        <LinkSection>
          <NavLinks>
            <NavigationItems>
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
          </NavLinks>
          <SocialLinks>
            <a href="https://www.twitter.com/trycourier" target="_blank">
              {/* <Image image={twitter} /> */}
              <img src={twitterLogo} />
            </a>
            <a href="https://www.linkedin.com/trycourier" target="_blank">
              {/* <Image image={linkedIn} /> */}
              <img src={linkedInLogo} />
            </a>
            <a href="https://www.twitter.com/trycourier" target="_blank">
              {/* <Image image={fb} /> */}
              <img src={facebookLogo} />
            </a>
            <a href="https://www.instagram.com/trycourier" target="_blank">
              {/* <Image image={instagram} /> */}
              <img src={instagramLogo} />
            </a>
          </SocialLinks>
          <DetailLinks>
            <p>
              <a href="/privacy">Privacy&nbsp;Policy</a>
              <a href="/terms">Terms&nbsp;of&nbsp;Service</a>
              <a href="/disclosure">Responsible&nbsp;Disclosure&nbsp;Policy</a>
            </p>
          </DetailLinks>
        </LinkSection>
      </Footer>
    </>
  );
};

export default FooterComponent;
