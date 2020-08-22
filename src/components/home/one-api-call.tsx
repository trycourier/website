import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";
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

const OneApi = styled.section`
  ${tw`md:flex pb-8 px-4 lg:px-0`}
  margin-top: 64px;
`;

const OneApiImageWrapper = styled.div`
  ${tw`md:w-1/2 text-left pt-0`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl`}
    font-weight: 200;
  }
`;

const StyledImage = styled(Image)`
  display: none;
`;

const OneApiInfo = styled.div`
  ${tw`pb-8 md:w-1/2 md:ml-8 md:mt-0 text-center`}
  & a {
    ${tw`no-underline text-sm py-2 px-8 mt-8`}
    color: ${colors.white};
    background: transparent;
    font-weight: 700;
    line-height: 30px;
    border-radius: 9999px;
    :hover{
      background: rgba(255,255,255,0.1);
    }
  }
`;

const OneApiTable = styled.table`
  ${tw`mt-8 md:mt-24`}
  display: inline-table;
  border-spacing: 0px;

  & tr {
    ${tw`m-0 p-0 text-lg mb-8`}
  }

  & th {
    ${tw`m-0 pt-8 pb-4 pl-6 text-sm mt-4 text-left`}
    border-bottom: 1px solid #425E72;
  }

  & td {
    ${tw`m-0 p-4 text-sm mt-4`}
    border-right: 1px solid #425E72;
    &:last-child {
      border-right: none;
    }
  }
`;

const OneApiComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "code-editor@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <OneApi>
      <OneApiImageWrapper>
        <h2>One API Call</h2>
        <div style={{ marginTop: -64 }}>
          <StyledImage image={img} />
        </div>
      </OneApiImageWrapper>
      <OneApiInfo>
        <Desktop>
          <OneApiTable>
            <thead>
              <tr>
                <th>Email</th>
                <th>SMS</th>
                <th>Push</th>
                <th>Direct Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={sendgrid} alt="SendGrid" />
                </td>
                <td>
                  <img src={twilio} alt="Twilio" />
                </td>
                <td>
                  <img src={firebase} alt="Firebase" />
                </td>
                <td>
                  <img src={slack} alt="Slack" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={postmark} alt="Postmark" />
                </td>
                <td>
                  <img src={messagebird} alt="MessageBird" />
                </td>
                <td>
                  <img src={onesignal} alt="OneSignal" />
                </td>
                <td>
                  <img src={fbMessenger} alt="FB Messenger" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={mailgun} alt="Mailgun" />
                </td>
                <td>
                  <img src={nexmo} alt="nexmo" />
                </td>
                <td>
                  <img src={expo} alt="Expo" />
                </td>
                <td>
                  <img src={msTeams} alt="MS Teams" />
                </td>
              </tr>
            </tbody>
          </OneApiTable>
        </Desktop>
        <Mobile>
          <OneApiTable>
            <thead>
              <tr>
                <th>Email</th>
                <th>SMS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={sendgrid} alt="SendGrid" />
                </td>
                <td>
                  <img src={twilio} alt="Twilio" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={postmark} alt="Postmark" />
                </td>
                <td>
                  <img src={messagebird} alt="MessageBird" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={mailgun} alt="Mailgun" />
                </td>
                <td>
                  <img src={nexmo} alt="nexmo" />
                </td>
              </tr>
            </tbody>
          </OneApiTable>
          <OneApiTable>
            <thead>
              <tr>
                <th>Push</th>
                <th>Direct Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={firebase} alt="Firebase" />
                </td>
                <td>
                  <img src={slack} alt="Slack" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={onesignal} alt="OneSignal" />
                </td>
                <td>
                  <img src={fbMessenger} alt="FB Messenger" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={expo} alt="Expo" />
                </td>
                <td>
                  <img src={msTeams} alt="MS Teams" />
                </td>
              </tr>
            </tbody>
          </OneApiTable>
        </Mobile>
        <div style={{ marginTop: 32 }}>
          <a href="https://docs.courier.com.com/docs" rel="noreferrer" target="_blank">Other Integrations</a>
        </div>
      </OneApiInfo>
    </OneApi>
  );
};

export default OneApiComponent;
