import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import NoCode from "./no-code";
import Image from "../image";
import colors from "../../colors";
import { listStyles } from "../styles";

const Editor = styled.section`
  ${tw`flex flex-col md:flex-row px-4 pt-0 mt-6 md:my-0 md:pb-16 lg:px-0`}
`;

const EditorText = styled.div`
  ${tw`w-3/4 md:w-1/2 mx-auto md:pr-8 mt-8`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl mb-2`}
    font-weight: 200;
    color: ${colors.textPrimary};
  }
  & p {
    ${tw`m-0 p-0 text-lg`}
    color: ${colors.textSecondary};
  }

  ${listStyles}
`;

const EditorImageWrapper = styled.div`
  ${tw`md:w-1/2`}
`;

const NoCodeWrapper = styled.div`
  position: relative;
  top: -10px;
  left: -55px; 
  zIndex: -1;
  @media (max-width: 768px){
    left: 0px;
  }
`;

const EditorComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "notification-design-studio@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Editor>
      <NoCodeWrapper>
        <NoCode />
      </NoCodeWrapper>
      <EditorText>
        <h2>Notification Design Studio</h2>
        <p>Empower every team member to build beautiful notifications.</p>
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
