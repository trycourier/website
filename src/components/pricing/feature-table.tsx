import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import { features } from "../../data/pricing";
import colors from "../../colors";
// import { Desktop, Mobile } from "../container";

import checkmark from "../../images/checkmark.svg";

const FeatureTable = styled.section`
  ${tw`flex flex-row pb-8 px-4`}
  color: ${colors.textPrimary};
`;

const shadow = `rgba(157, 52, 139, 0.25) 0px 8px 18px`;

const FeatureTableTable = styled.table`
  ${tw`mt-8 w-full text-center`}
  display: inline-table;
  border-spacing: 0px;
  & tbody.highlighted {
    font-weight: 600;
    font-size: 18px;

    & tr:not(:last-child) {
      & td {
        border-bottom: 1px solid ${colors.highlightBorder};
      }
    }

    tr {
      & td {
        background: ${colors.highlight};
        aside {
          font-weight: normal;
          font-size: 10px;

        }
      }
      &:first-child {
        & td {
          background: ${colors.highlight};
          &:first-child {
            border-top-left-radius: 20px;
          }
          &:last-child {
            border-top-right-radius: 20px;
          }
        }
      }
      &:last-child {
        & td {
          background: ${colors.highlight};
          border-bottom: none;
          &:first-child {
            border-bottom-left-radius: 20px;
          }
          &:last-child {
            border-bottom-right-radius: 20px;
          }
        }
      }
    }
  }
  & tr {
    ${tw`m-0 p-0`}
  }
  & th {
    ${tw`m-0 px-16 py-8 text-3xl md:text-4xl font-normal`}
    &:nth-child(2) {
      ${tw`p-8`}
      background: #FFF;
      position: relative;
      z-index: 2;
      box-shadow: ${shadow};
      border: 5px solid #fff;
      border-radius: 20px 20px 0px 0px;
      border-spacing: 0px;
    }
  }
  & td {
    ${tw`m-0 px-4 text-md mt-4`}
    border-bottom: 1px solid #CCC;

    &:first-child {
      ${tw`text-left pr-32`}
    }
    &:nth-child(2) {
      ${tw`py-4 px-8`}
      height: 24px;
      position: relative;
      z-index: 3;
      background: #fff;
      box-shadow: ${shadow};
      border-left: 16px solid #fff;
      border-right: 16px solid #fff;
    }
    &.highlighted {
      background-color: ${colors.highlight};
    }
  }
  & tfoot {
    & td {
      border-bottom: none;
      &:nth-child(2) {
        border-radius: 0px 0px 20px 20px;
      }
    }
  }
`;

import googleNav from "../../images/google-logo-white.svg";
import githubNav from "../../images/github-logo-white.svg";
import emailNav from "../../images/email-logo-white.svg";

import { githubSignUpUrl, googleSignUpUrl, emailSignUpUrl } from "../../links";

const AccountButtons = styled.ul`
  ${tw`m-0 p-2 flex hidden md:inline-block`}
  list-style: none;
  height: 36px;
  & li {
    ${tw`list-none inline-block mx-2`}
    height: 24px;
    width: 24px;
    border-radius: 9999px;
    padding: 6px;
    & :hover {
      filter: brightness(90%);
    }
  }
  & li.google {
    background: ${colors.googleBlue};
    & a > img {
      margin-top: 2px;
    }
  }
  & li.github {
    background: #000;
    & img {
      margin-top: 1px;
    }
  }
  & li.email {
    background: ${colors.berry};
    & img {
      margin-top: 3px;
    }
  }
  svg {
    fill: white;
  }
`;

const Button = styled.button`
  ${tw`rounded-full mr-2 px-8 py-2 text-white text-md align-middle`}
  background: ${colors.googleBlue};
  border: 1px solid transparent;
  height: 36px;
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
    top: -7px;
    cursor: pointer;
  }
`;

const AccountButtonComponent: React.FC = () => {
  return (
    <AccountButtons>
      <li className="google">
        <a href={googleSignUpUrl} target="_blank">
          <img src={googleNav} alt="Google SSO" />
        </a>
      </li>
      <li className="github">
        <a href={githubSignUpUrl} target="_blank">
          <img src={githubNav} alt="GitHub SSO" />
        </a>
      </li>
      <li className="email">
        <a href={emailSignUpUrl} target="_blank">
          <img src={emailNav} alt="Sign Up with Email" />
        </a>
      </li>
    </AccountButtons>
  );
};

const handleContactSalesClick = () => {
  try {
    window.Intercom('showNewMessage', `I'd like to discuss Courier's Enterprise plan. Please contact me at: `);
  }catch(e) {
    console.warn("Intercom not enabled:", e);
    window.location = "mailto:sales@trycourier.com";
  }
}

const displayCell = (property: any | string) => {
  switch (property) {
    case "SIGN_UP":
      return <AccountButtonComponent />;
    case "CONTACT_SALES":
      return <Button onClick={handleContactSalesClick}>Contact Sales</Button>;
    case true:
      return <img src={checkmark} alt="+" width="32"/>;
    default:
      return property;
  }
};
const FeatureTableComponent: React.FC = () => {
  return (
    <FeatureTable>
      <FeatureTableTable>
        <thead>
          <tr>
            <th></th>
            <th>Standard</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody className="highlighted">
          <tr>
            <td>Subscription Fee</td>
            <td className="highlighted">$0</td>
            <td>$5,000/mo</td>
          </tr>
          <tr>
            <td>Included Usage</td>
            <td className="highlighted">10,000 notifications/mo</td>
            <td>10,000 notifications/mo</td>
          </tr>
          <tr>
            <td>Usage Fee</td>
            <td className="highlighted">
              <span>Pricing Varies</span>
              <aside>See <strong>Usage Based Pricing</strong> above</aside>
            </td>
            <td>
              <span>Pricing Varies</span>
              <aside>See <strong>Usage Based Pricing</strong> above</aside>
            </td>
          </tr>
        </tbody>
        <tbody>
        {features.map(feat => (
          <tr key={feat.label}>
            <td>{feat.label}</td>
            <td>{feat.standard ? displayCell(feat.standard) : " "}</td>
            <td>{feat.enterprise ? displayCell(feat.enterprise) : " "}</td>
          </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>{displayCell("SIGN_UP")}</td>
            <td>{displayCell("CONTACT_SALES")}</td>
          </tr>
        </tfoot>
      </FeatureTableTable>
    </FeatureTable>
  );
};

export default FeatureTableComponent;
