import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import googleLogo from "../../images/google-logo-white.svg";
import githubLogo from "../../images/github-logo-white.svg";
import colors from "../../colors";


const Button = styled.button`
  ${tw`rounded-full mr-2 px-4 py-2 text-white text-sm align-middle`}
  background: ${colors.googleBlue};
  border-color: ${colors.googleBlue};
  height: 36px;
  line-height: 24px;
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
  }
`

type CTAProps = {
  footer: boolean;
}

const Content = styled.div`
  & form {
    ${tw`my-2 p-3`}
    background-color: ${(props: CTAProps) => props.footer ? colors.berry : `rgba(0,0,0,0.25)`};
    border-radius: 32px;

    & button {
      ${tw`rounded-full mr-2 px-4 py-2 text-white text-sm relative`}
      height: 36px;
      width: 170px;
    }
    & button.ghost {
      background-color: transparent;
      border: none;
      width: 90px;
    }
  }
`;


const RegisterationCTA: React.FC = () => {
  return (
    <Content footer={false}>
      <form method="get" action="https://www.trycourier.app/register">
        <Button>
          <img src={googleLogo} /> 
          <label>Google</label>
        </Button>
        <Button className="github">
          <img src={githubLogo} />
          <label>GitHub</label>
        </Button>
        <button className="ghost">or <strong>email</strong></button>
      </form>
    </Content>
  );
};

export default RegisterationCTA;
