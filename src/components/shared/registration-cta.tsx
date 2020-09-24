import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import googleLogo from "../../images/google-logo-white.svg";
import githubLogo from "../../images/github-logo-white.svg";
import emailLogo from "../../images/email-logo-white.svg";
import colors from "../../colors";
import { Desktop, Mobile } from "../container";

import {
  githubSignUpUrl,
  googleSignUpUrl,
  emailSignUpUrl,
  signUpUrl,
  trackSignUp,
} from "../../links";

const Button = styled.button`
  ${tw`rounded-full mr-2 px-4 py-2 text-white text-sm align-middle`}
  background: ${colors.googleBlue};
  border-color: ${colors.googleBlue};
  border: 1px solid transparent;
  height: 36px;
  line-height: 24px;
  cursor: pointer;
  &.github {
    background: ${colors.berry};
    border-color: ${colors.berry};
  }
  & img {
    position: relative;
    top: -1px;
  }
  & label {
    position: relative;
    left: 6px;
    top: -7px;
    cursor: pointer;
  }
`;

type CTAProps = {
  footer: boolean;
};

const Content = styled.div`
  & .form {
    ${tw`my-6 md:my-2 md:p-3 mx-auto`}
    background-color: ${(props: CTAProps) =>
      props.footer ? colors.berryGlass : `rgba(0,0,0,0.25)`};

    @media(max-width: 768px){
      background-color: transparent;
    }
    border-radius: 32px;

    & button {
      ${tw`rounded-full mr-2 px-4 py-2 text-white text-sm relative`}
      height: 36px;
      width: 170px;
      & :hover {
        filter: brightness(90%);
      }
    }
    & button.ghost {
      background-color: transparent;
      border: none;
      width: 90px;
    }
  }
`;

export const MobileRegistrationCTA = styled.div`
  & button.mobile {
    height: 52px;
    ${tw`flex w-full justify-between py-4 mt-0`}
    width: 100%;
    & label {
      margin-top: 4px;
      font-weight: 600;
      text-align: left;
    }
    & img {
      margin-left: 8px;
    }
    & img.email {
      padding-bottom: 2px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
`;

const handleSignUpClick = () => {
  try {
    trackSignUp();
    window.open(signUpUrl, "_blank");
  } catch (e) {
    console.warn("Window not available.");
  }
};

const RegistrationCTA: React.FC = (props) => {
  return (
    <Content footer={props.footer}>
      <div className="form">
        <Desktop>
          <Flex>
            <a href={googleSignUpUrl} onClick={() => trackSignUp("Google")}>
              <Button>
                <img src={googleLogo} alt="Google SSO" />
                <label>Google</label>
              </Button>
            </a>
            <a href={githubSignUpUrl} onClick={() => trackSignUp("GitHub")}>
              <Button className="github">
                <img src={githubLogo} alt="GitHub SSO" />
                <label>GitHub</label>
              </Button>
            </a>
            <a href={emailSignUpUrl} onClick={() => trackSignUp("Email")}>
              <button className="ghost" style={{color: props.footer && 'black'}}>
                or <strong>email</strong>
              </button>
            </a>
          </Flex>
        </Desktop>
        <Mobile>
          <MobileRegistrationCTA>
            <Button className="mobile" onClick={handleSignUpClick}>
              <label>Sign up!</label>
              <div>
                <img src={googleLogo} alt="Google SSO" />
                <img src={githubLogo} alt="GitHub SSO" />
                <img className="email" src={emailLogo} alt="Email" />
              </div>
            </Button>
          </MobileRegistrationCTA>
        </Mobile>
      </div>
    </Content>
  );
};

export default RegistrationCTA;
