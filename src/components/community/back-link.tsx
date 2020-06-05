import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import IconBack from "../../images/icon-back.svg";
import colors from "../../colors";

const BackImg = styled.img`
  ${tw`relative`}
  top: 10px;
  transition-duration: 300ms;
`;

const BackLink = styled.a`
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

const BackLinkComponent: React.FC = () => {
  return (
    <div style={{height: 48}}>
      <BackLink href="/community">
        <BackImg src={IconBack} alt="Back" /> View all Articles
      </BackLink>
    </div>
  );
};

export default BackLinkComponent;
