import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";
// import { Desktop, Mobile } from "../container";

import checkmark from "../../images/checkmark.svg";

const FeatureTable = styled.section`
  ${tw`flex flex-row pb-8 px-4`}
  background: ${colors.berrywhite};
  color: ${colors.textPrimary};
`;

const FeatureTableTable= styled.table`
  ${tw`mt-8 text-center`}
  display: inline-table;
  border-spacing: 0px;
  & tbody.highlighted {

    background: ${colors.highlight};

    & tr:not(:last-child) {
      & td {
        border-bottom: 1px solid ${colors.highlightBorder};
      }
    }
  }
  & tr {
    ${tw`m-0 p-0`}
  }
  & th {
    ${tw`m-0 px-16 py-8 text-xl`}
    &:nth-child(2){
      ${tw `p-8`}
      background: #FFF;
      box-shadow: 0px 3px 6px ${colors.berryglass};
      border: 5px solid #FFF;
      border-radius: 20px 20px 0px 0px;
      border-spacing: 0px;
    } 
  }
  & td {
    ${tw`m-0 p-4 text-md mt-4`}
    border-bottom: 1px solid #CCC;
    &:first-child{
      ${tw`text-left pr-32`}
    }
    &:nth-child(2){
      ${tw `p-8`}
      background: #FFF;
      box-shadow: 0px 3px 6px ${colors.berryglass};
      border: 5px solid #FFF;
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
    </FeatureTable>
  );
};

export default FeatureTableComponent;
