import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";
// import { Desktop, Mobile } from "../container";

import checkmark from "../../images/checkmark.svg";

const FeatureTable = styled.section`
  ${tw`flex flex-row mt-8pt-24 pb-8 md:py-24 px-4 lg:px-0`}
  color: ${colors.textPrimary};
`;

const FeatureTableInfo = styled.div`
  ${tw`w-full`}
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

const FeatureTableTable= styled.table`
  ${tw`mt-8`}
  display: inline-table;
  border-spacing: 0px;
  & tbody {
    background: #CCF;
  }
  & tr {
    ${tw`m-0 p-0 text-lg mb-8`}
  }
  & th {
    ${tw`m-0 p-4 text-sm mt-4 text-left`}
    border-bottom: 1px solid #425E72;
  }
  & td {
    ${tw`m-0 p-4 text-sm mt-4`}
    border-right: 1px solid #425E72;
    &:last-child{
      border-right: none;
    }
  }
`;


const features = [
  {
    label: "Team Members",
    standard: true,
    enterprise: true
  },
  {
    label: "Unlimited Channels",
    standard: true,
    enterprise: true
  },
  {
    label: "Unlimited Provider Integrations",
    standard: true,
    enterprise: true
  },
  {
    label: "Unlimited Conditions",
    standard: true,
    enterprise: true
  },
  {
    label: "OAuth Google / Github",
    standard: true,
    enterprise: true
  },
  {
    label: "Event Log",
    standard: true,
    enterprise: true
  },
  {
    label: "Customer Support",
    standard: "Advanced",
    enterprise: "Premium"
  },
  {
    label: "Two Factor Authentication",
    standard: false,
    enterprise: true
  },
  {
    label: "Custom Roles and Permissions",
    standard: false,
    enterprise: true
  },
  {
    label: "Message Retention Policy",
    standard: false,
    enterprise: "Custom"
  },
  {
    label: "Cross-Channel Tracking Dashboard",
    standard: false,
    enterprise: true
  },
  {
    label: "HIPPA Compliance",
    standard: false,
    enterprise: true
  },
  {
    label: "Custom Invoicing",
    standard: false,
    enterprise: true
  },
  {
    label: "Data Export",
    standard: false,
    enterprise: true
  },
  {
    label: "SAMLP 2.0",
    standard: false,
    enterprise: true
  },
]

const FeatureTableComponent: React.FC = () => {

  return (
    <FeatureTable>
      <FeatureTableInfo>
          <FeatureTableTable>
            <tr>
              <th></th>
              <th>Standard</th>
              <th>Enterprise</th>
            </tr>
            <tbody className="highlighted">
            <tr>
              <td>Subscription Fee</td>
              <td>Free</td>
              <td>$5k / mo</td>
            </tr>
            <tr>
              <td>Usage Fee (free of to 10k/mo)</td>
              <td>per notification</td>
              <td>per notification</td>
            </tr>
            </tbody>
            {features.map(feat => (
              <tr>
                <td>{feat.label}</td>
                <td>{feat.standard ? <img src={checkmark} /> : " "}</td>
                <td>{feat.enterprise ? <img src={checkmark} /> : " "}</td>
              </tr>
            ))}
          </FeatureTableTable>
      </FeatureTableInfo>
    </FeatureTable>
  );
};

export default FeatureTableComponent;
