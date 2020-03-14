import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";
import colors from "../../colors";

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

const Implement = styled.section`
  ${tw`md:flex mt-8pt-24 pb-8 md:py-24 px-4 lg:px-0`}
`;

const ImplementImageWrapper = styled.div`
  ${tw`md:w-1/2 text-left`}
  & h2 {
    ${tw`m-0 p-0 text-3xl mb-2`}
  }
`;

const ImplementInfo = styled.div`
  ${tw`md:w-1/2 ml-8 mt-32 text-center`}
  & a {
    ${tw`no-underline text-sm py-6 px-8 mt-8`}
    color: ${colors.white};
    background: rgba(255,255,255,0.1);
    font-weight: 600;
    line-height: 30px;
    border-radius: 9999px;
    :hover{
      background: ${colors.berry};
    }
  }
`;

const ImplementTable= styled.table`
  display: inline-table;
  border-spacing: 0px;
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

const channels = ["Email", "SMS", "Push", "Direct Message"];

const ImplementComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "code-editor@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 584) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Implement>
      <ImplementImageWrapper>
        <h2>One API Call</h2>
        <Image image={img} />
      </ImplementImageWrapper>
      <ImplementInfo>
        <ImplementTable>
            <tr>
              {channels.map(c => <th>{c}</th>)}
            </tr>
            <tr>
              <td><img src={postmark} alt="Postmark" /></td>
              <td><img src={messagebird} alt="MessageBird" /></td>
              <td><img src={onesignal} alt="OneSignal" /></td>
              <td><img src={fbMessenger} alt="FB Messenger" /></td>
            </tr>
            <tr>
              <td><img src={sendgrid} alt="SendGrid" /></td>
              <td><img src={twilio} alt="Twilio" /></td>
              <td><img src={firebase} alt="Firebase" /></td>
              <td><img src={slack} alt="Slack" /></td>
            </tr>
            <tr>
              <td><img src={mailgun} alt="Mailgun" /></td>
              <td><img src={nexmo} alt="nexmo" /></td>
              <td><img src={expo} alt="Expo" /></td>
              <td><img src={msTeams} alt="MS Teams" /></td>
            </tr>
        </ImplementTable>
        <div style={{marginTop: 32}}>
          <a href="#">Other Integrations</a>
        </div>
      </ImplementInfo>

    </Implement>
  );
};

export default ImplementComponent;
