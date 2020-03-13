import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Implement = styled.section`
  ${tw`md:flex mt-8pt-24 pb-8 md:py-24 px-4 lg:px-0`}
`;

const ImplementTable= styled.div`
  ${tw`md:w-1/2 md:pr-8`}
  & tr {
    ${tw`m-0 p-0 text-lg mb-8`}
  }
  & th {
    ${tw`m-0 p-0 text-sm mt-4 text-left`}
  }
  & td {
    ${tw`m-0 p-0 text-sm mt-4`}
  }
`;

const ImplementImageWrapper = styled.div`
  ${tw`md:w-1/2 text-left`}
`;

const ImplementComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "code-block@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
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
      <ImplementTable>
        <table>
          <tr>
            <th>Email</th>
            <th>SMS</th>
            <th>Push</th>
            <th>Direct Message</th>
          </tr>
          <tr>
            <td>Postmark</td>
            <td>MessageBird</td>
            <td>OneSignal</td>
            <td>FB Messenger</td>
          </tr>
          <tr>
            <td>SendGrid</td>
            <td>Twilio</td>
            <td>Firebase</td>
            <td>Slack</td>
          </tr>
          <tr>
            <td>Mailgun</td>
            <td>nexmo</td>
            <td>Expo</td>
            <td>MS Teams</td>
          </tr>
        </table>
      </ImplementTable>

    </Implement>
  );
};

export default ImplementComponent;
