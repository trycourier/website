import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

import PricingLine from "./pricing-line";
const Pricing = styled.section`
  ${tw`flex flex-col pt-24 md:pt-0 pb-8 md:pb-24 px-4`}
`;

const UsageBasedPricingText = styled.div`
  ${tw`w-full`}
  & h2 {
    ${tw`m-0 p-0 text-4xl mb-4`}
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-xl mt-2`}
  }
`;

const UsageBasedPricingWrapper = styled.div`
  ${tw`w-full`}
  & form {
    background-color: ${colors.berryWhite};
    max-width: 455px;
  }
  & button.ghost {
    color: ${colors.textPrimary};
  }
`;

const UsageBasedPricing: React.FC = () => {
  return (
    <Pricing>
      <UsageBasedPricingText>
        <h2>Usage Based Pricing</h2>
        <p>
          Get started for free, or select a flexible plan based on your sending
          needs.
        </p>
      </UsageBasedPricingText>
      <UsageBasedPricingWrapper>
        <PricingLine />
      </UsageBasedPricingWrapper>
    </Pricing>
  );
};

export default UsageBasedPricing;
