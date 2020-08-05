import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import { plans, features } from "../../data/pricing";
import colors from "../../colors";
import { Desktop, Mobile } from "../container";
import { MobileRegistrationCTA } from "../shared/registration-cta";

import checkmark from "../../images/checkmark.svg";

const FeatureTable = styled.section`
  ${tw`flex flex-row`}
  color: ${colors.textPrimary};
`;

const shadow = `rgba(157, 52, 139, 0.25) 0px 8px 18px`;

const FeatureTableTable = styled.table`
  ${tw`mt-8 w-full text-center`}
  display: inline-table;
  border-spacing: 0px;
  font-weight: normal;

  tbody.features {
    tr:first-child td {
      border: none;
    }

    tr:not(:first-child) {
      td {
        position: relative;
        border: none;

        &:first-child:after {
          content: "";
          position: absolute;
          width: 110%;
          margin: auto;
          left: 16px;
          bottom: 0;
          border-bottom: 1px solid #ccc;
        }

        &:not(:first-child):after {
          content: "";
          position: absolute;
          width: 80%;
          margin: auto;
          left: 16px;
          bottom: 0;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }

  tbody.highlighted {
    font-size: 18px;

    tr:not(:last-child) {
      td {
        position: relative;
        border: none;

        &:first-child:after {
          content: "";
          position: absolute;
          width: 110%;
          margin: auto;
          left: 16px;
          bottom: 0;
          border-bottom: 1px solid #ccc;
        }

        &:not(:first-child):after {
          content: "";
          position: absolute;
          width: 80%;
          margin: auto;
          left: 15px;
          bottom: 0;
          border-bottom: 1px solid #ccc;
        }
      }
    }

    tr {
      background: ${colors.highlight};
      td {
        aside {
          font-weight: normal;
          font-size: 10px;
        }
      }
      &:first-child {
        td {
          &:first-child {
            border-top-left-radius: 10px;
          }
          &:last-child {
            border-top-right-radius: 10px;
          }
        }
      }
      &:last-child {
        td {
          border-bottom: none;
          &:first-child {
            border-bottom-left-radius: 10px;
          }
          &:last-child {
            border-bottom-right-radius: 10px;
          }
        }
      }
    }
  }
  tr {
    ${tw`m-0 p-0`}
  }
  th {
    text-align: left;
    font-size: 28px;
    font-weight: normal;
    ${tw`m-0 px-2 py-4`}
  }
  td {
    font-size: 16px;
    color: #344563;
    ${tw`m-0 mt-4`}
    padding: 16px;

    border-bottom: 1px solid #ccc;
    text-align: left;
  }
  tfoot {
    td {
      border-bottom: none;
      &:nth-child(2) {
        border-radius: 0px 0px 20px 20px;
      }
    }
  }
`;

import googleLogo from "../../images/google-logo-white.svg";
import githubLogo from "../../images/github-logo-white.svg";
import emailLogo from "../../images/email-logo-white.svg";

import {
  githubSignUpUrl,
  googleSignUpUrl,
  emailSignUpUrl,
  signUpUrl,
  trackSignUp,
} from "../../links";

const AccountButtons = styled.ul`
  display: flex;
  align-items: center;
  ${tw`m-0 p-2 pl-0`}

  list-style: none;
  height: 36px;
  li {
    ${tw`list-none inline-block mx-2`}
    height: 30px;
    width: 30px;
    border-radius: 9999px;
    & :hover {
      filter: brightness(90%);
    }

    a {
      padding: 3px;
      display: block;
    }
  }
  li.google {
    margin-left: 0;

    background: ${colors.googleBlue};
    img {
      width: 20px;
      margin-left: 2px;
      margin-top: 2px;
    }
  }
  li.github {
    background: #000;
    img {
      width: 20px;
      margin-left: 2px;
      margin-top: 2px;
    }
  }
  li.email {
    background: ${colors.berry};
    img {
      width: 18px;
      margin-left: 3px;
      margin-top: 5px;
    }
  }
  svg {
    fill: white;
  }
`;

const Button = styled.button`
  ${tw`rounded-full mr-2 px-8 py-4 md:py-2 text-white text-md align-middle`}
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

const AccountButtonComponent: React.FC = () => {
  return (
    <AccountButtons>
      <li className="google">
        <a
          href={googleSignUpUrl}
          target="_blank"
          onClick={() => trackSignUp("Google")}
        >
          <img src={googleLogo} alt="Google SSO" />
        </a>
      </li>
      <li className="github">
        <a
          href={githubSignUpUrl}
          target="_blank"
          onClick={() => trackSignUp("GitHub")}
        >
          <img src={githubLogo} alt="GitHub SSO" />
        </a>
      </li>
      <li className="email">
        <a
          href={emailSignUpUrl}
          target="_blank"
          onClick={() => trackSignUp("Email")}
        >
          <img src={emailLogo} alt="Sign Up with Email" />
        </a>
      </li>
    </AccountButtons>
  );
};

const Card = styled.div`
  ${tw`p-6 my-4 mb-12`}
  box-shadow: ${shadow};
  border-radius: 20px;
  & ul { 
    list-style: none;
    padding: 0px;
    & li {
      ${tw`pb-6`}
    }
  }
`;

const CardHeader = styled.div`
  ${tw`py-4`}
  & h3 {
    font-size: 40px;
    font-weight: 300;
    margin: 0;
  }
  & p {
    margin: 0;
  }
`;

const Pricing = styled.div`
  ${tw`text-center py-4`}
  & h4 {
    color: ${colors.green};
    font-size: 45px;
    padding-bottom: 0px;
    margin: 0px;
    & small {
      font-size: 50%;
    }
  }
  & p {
    color: ${colors.textSecondary};
    margin-top: 0px;
    margin-bottom: 8px;
  }
`;

const handleSignUpClick = () => {
  try {
    trackSignUp();
    window.open(signUpUrl, "_blank");
  } catch (e) {
    console.warn("Window not available.");
  }
};

const displayCell = (property: any | string) => {
  switch (property) {
    case "SIGN_UP":
      return <AccountButtonComponent />;
    case "CONTACT_SALES":
      return <a href="mailto:sales@trycourier.com">Contact Sales</a>;
    // return <Button onClick={handleContactSalesClick}>Contact Sales</Button>;
    case true:
      return <img src={checkmark} alt="+" width="32" />;
    default:
      return property;
  }
};

const getMobileFeatures = (type: string) => {
  return features
    .filter((feat) => feat[type])
    .map((feat, idx) => {
      const label = (() => {
        if (!feat.label || !feat[type]) {
          return;
        }

        if (type !== "developer" && feat.developer === feat[type]) {
          return;
        }

        if (type === "business" && feat.pro === feat[type]) {
          return;
        }

        if (feat[type] === "Yes") {
          return feat.label;
        }

        return (
          <>
            {feat[type]} {feat.label}
          </>
        );
      })();

      if (!label) {
        return null;
      }

      return <li key={idx}>{label}</li>;
    });
};

const FeatureTableComponent: React.FC = () => {
  return (
    <FeatureTable>
      <Desktop>
        <FeatureTableTable>
          <thead>
            <tr>
              <th />
              <th>{plans.free.name}</th>
              <th>{plans.good.name}</th>
              <th>{plans.better.name}</th>
            </tr>
          </thead>
          <tbody className="highlighted">
            <tr>
              <td>Subscription Fee</td>
              <td className="highlighted">
                <strong>{plans.free.price}</strong>
              </td>
              <td>
                <strong>{plans.good.price}</strong>
              </td>
              <td>
                <strong>{plans.better.price}</strong>
              </td>
            </tr>
            <tr>
              <td>Included Usage</td>
              <td className="highlighted">{plans.free.included}</td>
              <td>{plans.good.included}</td>
              <td>{plans.better.included}</td>
            </tr>
            <tr>
              <td>Overage</td>
              <td className="highlighted">{plans.free.overage}</td>
              <td>{plans.good.overage}</td>
              <td>{plans.better.overage}</td>
            </tr>
          </tbody>
          <tbody className="features">
            {features.map((feat, idx) => (
              <tr key={idx}>
                <td>{feat.label}</td>
                <td>{feat.developer ? displayCell(feat.developer) : " "}</td>
                <td>{feat.pro ? displayCell(feat.pro) : " "}</td>
                <td>{feat.business ? displayCell(feat.business) : " "}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>{displayCell("SIGN_UP")}</td>
              <td>{displayCell("SIGN_UP")}</td>
              <td>{displayCell("SIGN_UP")}</td>
            </tr>
          </tfoot>
        </FeatureTableTable>
      </Desktop>

      <Mobile style={{ width: "100%" }}>
        <Card>
          <CardHeader>
            <h3>{plans.free.name}</h3>
            <p>Subscription Plan</p>
          </CardHeader>
          <Pricing>
            <h4 style={{ fontSize: 36 }}>{plans.free.price}</h4>
            <p>{plans.free.included}</p>
          </Pricing>
          <ul>{getMobileFeatures("developer")}</ul>
          <MobileRegistrationCTA>
            <Button className="mobile" onClick={handleSignUpClick}>
              <label>Sign up!</label>
              <div>
                <img src={googleLogo} alt="Google SSO" />
                <img src={githubLogo} alt="GitHub SSO" />
                <img className="email" src={emailLogo} alt="Email" />
              </div>
            </Button>
          </MobileRegistrationCTA>
        </Card>

        <Card>
          <CardHeader>
            <h3>{plans.good.name}</h3>
            <p>Subscription Plan</p>
          </CardHeader>

          <Pricing>
            <h4>{plans.good.price}</h4>
            <p>{plans.good.included}</p>
            <p>{plans.good.overage}</p>
          </Pricing>
          <ul>
            <ul>
              <li>Everything from the {plans.free.name} Plan</li>
              {getMobileFeatures("pro")}
            </ul>
          </ul>
          <MobileRegistrationCTA>
            <Button className="mobile" onClick={handleSignUpClick}>
              <label>Sign up!</label>
              <div>
                <img src={googleLogo} alt="Google SSO" />
                <img src={githubLogo} alt="GitHub SSO" />
                <img className="email" src={emailLogo} alt="Email" />
              </div>
            </Button>
          </MobileRegistrationCTA>
        </Card>

        <Card>
          <CardHeader>
            <h3>{plans.better.name}</h3>
            <p>Subscription Plan</p>
          </CardHeader>

          <Pricing>
            <h4>{plans.better.price}</h4>
            <p>{plans.better.included}</p>
            <p>{plans.better.overage}</p>
          </Pricing>
          <ul>
            <li>Everything from the {plans.good.name} Plan</li>
            <ul>{getMobileFeatures("business")}</ul>
          </ul>
          <MobileRegistrationCTA>
            <Button className="mobile" onClick={handleSignUpClick}>
              <label>Sign up!</label>
              <div>
                <img src={googleLogo} alt="Google SSO" />
                <img src={githubLogo} alt="GitHub SSO" />
                <img className="email" src={emailLogo} alt="Email" />
              </div>
            </Button>
          </MobileRegistrationCTA>
        </Card>
      </Mobile>
    </FeatureTable>
  );
};

export default FeatureTableComponent;
