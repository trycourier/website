import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

type PricingPlan = {
  name: string;
  price: number;
  details: Array<string>;
  featured?: boolean;
};

type PricingCardProps = {
  plan: PricingPlan;
};

const pricing: Array<PricingPlan> = [
  {
    name: "Free Forever",
    price: 0,
    details: ["10k notifications / mo.", "Unlimited users"],
  },
  {
    name: "Team",
    price: 99,
    details: [
      "500k notifications / mo.",
      "Unlimited users",
      "Role Based Access Control",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: 499,
    details: [
      "2.5MM notifications / mo.",
      "Unlimited users",
      "Role Based Access Control",
    ],
  },
];

const Pricing = styled.section`
  ${tw`py-24 lg:w-3/4 mx-auto`}
`;

const Plans = styled.section`
  ${tw`md:flex`}
`;

const PlanColumn = styled.div`
  ${tw`md:w-1/3 px-4 py-2 md:p-4`}
`;

const PricingCardEl = styled.div`
  ${tw`border border-solid border-transparent shadow-xl p-6 md:relative`}
  top: ${(props: PricingCardProps) => (props.plan.featured ? "-10px" : "0")};
  min-height: ${(props: PricingCardProps) =>
    props.plan.featured ? "220px" : "200px"};
  background-color: ${(props: PricingCardProps) =>
    props.plan.featured ? "#9d3789" : "white"};
  color: ${(props: PricingCardProps) =>
    props.plan.featured ? "white" : "#969696"};
  border-radius: 1rem;
  & h3 {
    ${tw`m-0 p-0 text-xl`}
    color: ${(props: PricingCardProps) =>
      props.plan.featured ? "white" : "#2f3e5a"};
  }
  & .price {
    ${tw`mt-4 mb-6 text-xl`}
    & .amount {
      ${tw`text-5xl font-bold px-1`}
      color: ${(props: PricingCardProps) =>
        props.plan.featured ? "white" : "#344563"};
    }
  }
  & ul {
    ${tw`m-0 p-0 list-none`}
    & li {
      ${tw`my-3 text-sm`}
    }
  }
  & a {
    ${tw`inline-block no-underline text-xs border border-solid py-2 px-6 rounded-full mt-3 lg:mt-6`}
    color: ${props => (props.plan.featured ? colors.berry : "white")};
    background-color: ${props => (props.plan.featured ? "white" : colors.berry)};
    line-height: 20px;
  }
`;

const EnterprisePlan = styled.aside`
  ${tw`border border-solid border-white shadow-xl p-6 text-center md:w-2/3 mx-4 md:mx-auto bg-white mt-2 md:mt-0`}
  border-radius: 1rem;
  & h3 {
    ${tw`m-0 p-0 text-xl`}
    color: #2f3e5a;
  }
  & p {
    ${tw`text-sm`}
    color: #969696;
  }
  & a {
    ${tw`no-underline text-sm border border-solid py-3 px-8 rounded-full`}
    background-color: ${colors.berry};
    color: white;
    line-height: 60px;
  }
`;

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <PricingCardEl plan={plan}>
      <h3>{plan.name}</h3>
      <div className="price">
        <span className="currency">$</span>
        <span className="amount">{plan.price}</span>
        <span className="period">/ mo.</span>
      </div>
      {plan.details && plan.details.length ? (
        <ul>
          {plan.details.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      ) : null}
      <a href="https://www.trycourier.app/register" target="_blank">Sign Up</a>
    </PricingCardEl>
  );
};

const PricingComponent: React.FC = () => {
  return (
    <Pricing>
      {pricing && pricing.length ? (
        <Plans>
          {pricing.map((p, idx) => (
            <PlanColumn key={idx}>
              <PricingCard plan={p} />
            </PlanColumn>
          ))}
        </Plans>
      ) : null}
      <EnterprisePlan>
        <h3>Enterprise</h3>
        <p>
          If you are sending more volume than 2MM notifications/mo., want
          advanced capabilities like SAML SSO, or need help navigating your
          purchasing process, we'd love to chat about our Enterprise options.
        </p>
        <a href="mailto:sales@trycourier.com">Contact Sales</a>
      </EnterprisePlan>
    </Pricing>
  );
};

export default PricingComponent;
