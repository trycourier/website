import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

const PricingLine = styled.section`
  ${tw`md:flex mt-8pt-24 pb-8 md:py-24 px-4 lg:px-0`}
`;

const PricingLineInfo = styled.div`
  ${tw`md:w-1/2 md:ml-8 md:mt-24 text-center`}
  & a {
    ${tw`no-underline text-sm py-6 px-8 mt-8`}
    color: ${colors.white};
    background: rgba(255,255,255,0.1);
    font-weight: 700;
    line-height: 30px;
    border-radius: 9999px;
    :hover{
      background: ${colors.berry};
    }
  }
`;

const PricingLineComponent: React.FC = () => {
  return (
    <PricingLine>
      <PricingLineInfo>
        <input type="range" />
      </PricingLineInfo>
    </PricingLine>
  );
};

export default PricingLineComponent;
