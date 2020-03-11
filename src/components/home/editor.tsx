import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import NoCode from "./no-code";
import Image from "../image";

const Editor = styled.div`
  ${tw`py-24 pb-0 px-2 md:px-0`}
`;

const EditorText = styled.div`
  ${tw`text-center md:w-1/2 mx-auto pb-0 mb-0`}
  & h3 {
    ${tw`m-0 p-0 text-xl`}
  }
`;

const EditorImageWrapper = styled.div`
  ${tw`md:w-2/3 mx-auto relative`}
  top: -30px;
`;

const EditorComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "notification-design-studio@2x.png" }) {
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
        <NoCode />
        <h3>Notification Design Studio</h3>
        <p>
          Empower every team member to build beautiful notifications.
        </p>
        <ul>
          <li>Drag & drop content without writing code</li>
          <li>Consistent rendering across every email client</li>
          <li>Re-use content for any channel</li>
          <li>Consistent branding across all your notifications</li>
        </ul>
      </EditorText>
      <EditorImageWrapper>
        <Image image={img} />
      </EditorImageWrapper>
    </Editor>
  );
};

export default EditorComponent;
