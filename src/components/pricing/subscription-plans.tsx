import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

import FeatureTable from "./feature-table";
import EnterpriseFeatures from "./enterprise-features";

const Plans = styled.section`
  ${tw`flex flex-col`}

  @media only screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Title = styled.div`
  ${tw`w-full pb-2`}

  & h2 {
    ${tw`m-0 p-0`}
    font-size: 40px;
    font-weight: 200;
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-xl`}
  }
`;

const SubscriptionPlansWrapper = styled.div`
  width: 100%;
  & form {
    background-color: ${colors.berryWhite};
    max-width: 455px;
  }
  & button.ghost {
    color: ${colors.textPrimary};
  }
`;

const Button = styled.button`
  width: 310px;
  margin: auto;
  ${tw`rounded-full px-8 py-2 text-white text-md align-middle`}
  background: ${colors.googleBlue};
  border: 1px solid transparent;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  & :hover {
    filter: brightness(90%);
  }
  &.github {
    background: ${colors.berry};
  }
  & img {
    position: relative;
    top: -1px;
  }
  & label {
    position: relative;
    left: 6px;
    top: -4px;
    cursor: pointer;
  }
`;

const handleContactSalesClick = () => {
  try {
    window.Intercom(
      "showNewMessage",
      `I'd like to discuss Courier's Enterprise plan. Please contact me at: `
    );
  } catch (e) {
    console.warn("Intercom not enabled:", e);
    window.open("mailto:sales@courier.com", "_blank");
  }
};

const SubscriptionPlans: React.FC = () => {
  return (
    <Plans>
      <Title>
        <h2>Subscription Plans</h2>
        <p>Pricing that scales with you</p>
      </Title>
      <SubscriptionPlansWrapper>
        <FeatureTable />
      </SubscriptionPlansWrapper>
      <Title>
        <h2>Enterprise Plan</h2>
        <p>Top Features</p>
      </Title>
      <EnterpriseFeatures />
      <Button onClick={handleContactSalesClick}>Contact Sales</Button>
    </Plans>
  );
};

export default SubscriptionPlans;
