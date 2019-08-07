import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image, { GatsbyImage } from "../image";

const Editor = styled.div`
  ${tw`py-24 pb-0 px-2 md:px-0`}
`;

const EditorText = styled.div`
  ${tw`text-center md:w-1/2 mx-auto pb-0 mb-0`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
  }
  & ul {
    ${tw`m-0 p-0 list-none`}
    & li {
      ${tw`inline-block px-2 lg:px-4`}
      & > div {
        ${tw`cursor-default`}
        & span.icon {
          ${tw`inline-block align-middle`}
          overflow: hidden;
        }
        & span.text {
          ${tw`inline-block align-middle pl-2`}
          line-height: 40px;
        }
      }
      & > .active {
        ${tw`inline-block px-4 rounded-full cursor-default`}
        background-color: #e8eaec;
        & span.text {
          ${tw`inline-block`}
        }
      }
      & > .email .icon {
        width: 20px;
        height: 40px;
        & > div {
          margin-top: 11px;
        }
      }
      & > .push .icon {
        width: 20px;
        height: 40px;
        & > div {
          margin-top: 4px;
        }
      }
      & > .twilio .icon {
        width: 20px;
        height: 40px;
        & > div {
          margin-top: 8px;
        }
      }
      & > .slack .icon {
        width: 20px;
        height: 40px;
        & > div {
          margin-top: 8px;
        }
      }
    }
  }
`;

const EditorImageWrapper = styled.div`
  ${tw`md:w-2/3 mx-auto relative`}
  top: -30px;
`;

const ChannelToggle: React.FC<{
  channel: string;
  image: GatsbyImage;
  text: string;
  isActive?: boolean;
}> = ({ channel, image, text, isActive }) => {
  return (
    <div className={isActive ? `${channel} active` : channel}>
      <span className="icon">
        <Image image={image} />
      </span>
      <span className="text">{text}</span>
    </div>
  );
};

const EditorComponent: React.FC = () => {
  const { img, email, push, sms, slack } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Template@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "pr-email@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      push: file(relativePath: { eq: "pr-push-phone@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sms: file(relativePath: { eq: "PR - Twilio@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slack: file(relativePath: { eq: "PR - Slack@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Editor>
      <EditorText>
        <h2>Beautiful in every channel</h2>
        <p>
          Save time by using our Visual Editor to create a single message that
          is reusable across all channels, or tweak the message for each
          specific channel if you'd prefer.
        </p>
        <ul>
          <li>
            <ChannelToggle
              channel="email"
              image={email}
              text="Email"
              isActive={true}
            />
          </li>
          <li>
            <ChannelToggle channel="push" image={push} text="Push" />
          </li>
          <li>
            <ChannelToggle channel="twilio" image={sms} text="SMS" />
          </li>
          <li>
            <ChannelToggle channel="slack" image={slack} text="Slack" />
          </li>
        </ul>
      </EditorText>
      <EditorImageWrapper>
        <Image image={img} />
      </EditorImageWrapper>
    </Editor>
  );
};

export default EditorComponent;
