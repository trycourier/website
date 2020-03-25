import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import googleLogo from "../../images/google-logo-white.svg";
import githubLogo from "../../images/github-logo-white.svg";
import emailLogo from "../../images/email-logo-white.svg";
import colors from "../../colors";
import { Desktop, Mobile } from "../container";

import { githubSignUpUrl, googleSignUpUrl, emailSignUpUrl } from "../../links";

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
    ${tw`my-2 p-3 mx-auto`}
    background-color: ${(props: CTAProps) =>
      props.footer ? colors.berryGlass : `rgba(0,0,0,0.25)`};
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

const MobileContent = styled(Mobile)`
  & button.mobile {
    width: 100%;
    & label {
      text-align: left;
      margin-right: 25%;
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

const RegistrationCTA: React.FC = (props) => {
  return (
    <Content footer={props.footer}>
      <div className="form">
        <Desktop>
          <Flex>
            <a href={googleSignUpUrl}>
              <Button>
                <img src={googleLogo} alt="Google SSO" />
                <label>Google</label>
              </Button>
            </a>
            <a href={githubSignUpUrl}>
              <Button className="github">
                <img src={githubLogo} alt="GitHub SSO" />
                <label>GitHub</label>
              </Button>
            </a>
            <a href={emailSignUpUrl}>
              <button className="ghost">
                or <strong>email</strong>
              </button>
            </a>
          </Flex>
        </Desktop>
        <MobileContent>
          <Button className="mobile">
            <label>Sign up!</label>

            <a href={googleSignUpUrl}>
              <img src={googleLogo} alt="Google SSO" />
            </a>
            <a href={githubSignUpUrl}>
              <img src={githubLogo} alt="GitHub SSO" />
            </a>
            <a href={emailSignUpUrl}>
              <img className="email" src={emailLogo} alt="Email" />
            </a>
          </Button>
        </MobileContent>
      </div>
    </Content>
  );
};

export default RegistrationCTA;
