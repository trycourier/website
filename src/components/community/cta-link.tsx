import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import colors from "../../colors";

const CTALink = styled.a`
  ${tw`relative no-underline items-center justify-between py-2 px-6`}
  background: ${colors.berryGlass};
  color: ${colors.berry};
  border-radius: 4px;
  & :hover {
    filter: darken(10%);
    & img {
      transform: translate3d(-5px, 0, 0);
    }
  }
`;

const CTALinkComponent: React.FC = ({text}) => {
  return (
    <div style={{height: 48}}>
      <CTALink href="#" className="blogCTABotLauncher">
        {text}
      </CTALink>
    </div>
  );
};

export default CTALinkComponent;
