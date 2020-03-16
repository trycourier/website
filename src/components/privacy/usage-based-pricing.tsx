import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

import PricingLine from "./pricing-line";
const Pricing = styled.section`
  ${tw`md:flex pt-24 pb-8 md:py-24 px-4`}
`;

const UsageBasedPricingText = styled.div`
  ${tw`w-full`}
  & h2 {
    ${tw`m-0 p-0 text-4xl mb-4`}
    font-family: "Proxima Nova", sans-serif;
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-xl mt-2`}
  }
`;

const UsageBasedPricingWrapper = styled.div`
  ${tw`w-full`}
  & form {
    background-color: ${colors.berrywhite};
    max-width: 455px;
  }
  & button.ghost{
    color: ${colors.textPrimary};
  }
`;

const UsageBasedPricing: React.FC = () => {

  return (
    <Pricing>
      <UsageBasedPricingText>
        <h2>
          Getting started is easy!
          <br/>And free!
        </h2>
        <p>
         10,000 free notifications every month
        </p>
      </UsageBasedPricingText>
      <UsageBasedPricingWrapper>
        <PricingLine />
      </UsageBasedPricingWrapper>
    </Pricing>
  );
};

export default UsageBasedPricing;
