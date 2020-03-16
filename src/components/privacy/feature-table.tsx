import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";
import { Desktop, Mobile } from "../container";

import postmark from "../../images/providers/postmark.svg";
import messagebird from "../../images/providers/messagebird.svg";
import onesignal from "../../images/providers/onesignal.svg";
import fbMessenger from "../../images/providers/fb-messenger.svg";
import sendgrid from "../../images/providers/sendgrid.svg";
import twilio from "../../images/providers/twilio.svg";
import firebase from "../../images/providers/firebase.svg";
import slack from "../../images/providers/slack.svg";
import mailgun from "../../images/providers/mailgun.svg";
import nexmo from "../../images/providers/nexmo.svg";
import expo from "../../images/providers/expo.svg";
import msTeams from "../../images/providers/ms-teams.svg";

const FeatureTable = styled.section`
  ${tw`flex flex-row mt-8pt-24 pb-8 md:py-24 px-4 lg:px-0`}
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
        <Desktop>
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
                  <td>{feat.standard ? "+" : "-"}</td>
                  <td>{feat.enterprise ? "+" : "-"}</td>
                </tr>
              ))}

          </FeatureTableTable>
        </Desktop>
        <Mobile>
          <FeatureTableTable>
              <tr>
              <th>Email</th>
                <th>SMS</th>
              </tr>
              <tr>
              <td><img src={postmark} alt="Postmark" /></td>
                <td><img src={messagebird} alt="MessageBird" /></td>
              </tr>
              <tr>
              <td><img src={sendgrid} alt="SendGrid" /></td>
                <td><img src={twilio} alt="Twilio" /></td>
              </tr>
              <tr>
              <td><img src={mailgun} alt="Mailgun" /></td>
                <td><img src={nexmo} alt="nexmo" /></td>
              </tr>
          </FeatureTableTable>
          <FeatureTableTable>
              <tr>
                <th>Push</th>
                <th>Direct Message</th>
              </tr>
              <tr>
                <td><img src={onesignal} alt="OneSignal" /></td>
                <td><img src={fbMessenger} alt="FB Messenger" /></td>
              </tr>
              <tr>
                <td><img src={firebase} alt="Firebase" /></td>
                <td><img src={slack} alt="Slack" /></td>
              </tr>
              <tr>
                <td><img src={expo} alt="Expo" /></td>
                <td><img src={msTeams} alt="MS Teams" /></td>
              </tr>
          </FeatureTableTable>
        </Mobile>
        <div style={{marginTop: 32}}>
          <a href="#">Other Integrations</a>
        </div>
      </FeatureTableInfo>

    </FeatureTable>
  );
};

export default FeatureTableComponent;
