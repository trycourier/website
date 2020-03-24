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
    ${tw`m-0 p-0 text-4xl mb-4`}
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-xl mt-2`}
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
  @media (max-width: 640px) {
    overflow-x: scroll;
  }
`;

const SubscriptionPlans: React.FC = () => {
  return (
    <Plans>
      <SubscriptionPlansText>
        <h2>Subscription Plans</h2>
        <p>Get started for free, or select a flexible plan.</p>
      </SubscriptionPlansText>
      <SubscriptionPlansWrapper>
        <FeatureTable />
      </SubscriptionPlansWrapper>
    </Plans>
  );
};

export default SubscriptionPlans;
