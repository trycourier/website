import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

import FeatureTable from "./feature-table";
const Plans = styled.section`
  ${tw`flex flex-col`}
`;

const SubscriptionPlansText = styled.div`
  ${tw`w-full`}
  & h2 {
    ${tw`m-0 p-0 mb-4`}
    font-size: 40px;
    font-weight: 200;
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`hidden md:block m-0 p-0 text-xl mt-2`}
  }
`;

const SubscriptionPlansWrapper = styled.div`
  ${tw`w-full`}
  & form {
    background-color: ${colors.berryWhite};
    max-width: 455px;
  }
  & button.ghost {
    color: ${colors.textPrimary};
  }
`;

const SubscriptionPlans: React.FC = () => {
  return (
    <Plans>
      <SubscriptionPlansText>
        <h2>Subscription Plans</h2>
        <p>Start with our free Standard plan, or move to Enterprise for more advanced needs.</p>
      </SubscriptionPlansText>
      <SubscriptionPlansWrapper>
        <FeatureTable />
      </SubscriptionPlansWrapper>
    </Plans>
  );
};

export default SubscriptionPlans;
