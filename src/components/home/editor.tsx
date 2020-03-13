import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import NoCode from "./no-code";
import Image from "../image";
import colors from "../../colors";
import { listStyles } from "./styles";

const Editor = styled.section`
  ${tw`md:flex pt-24 pb-8 md:py-24 px-4 lg:px-0`}
`;

const EditorText = styled.div`
  ${tw`md:w-1/2 md:pr-8 mt-16`}
  & h2 {
    ${tw`m-0 p-0 text-3xl mb-2`}
    color: ${colors.textHeader};
  }
  & p {
    ${tw`m-0 p-0 text-lg`}
    color: ${colors.textSecondary};
  }

  ${listStyles}
`;

const EditorImageWrapper = styled.div`
  ${tw`md:w-1/2 text-right`}
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
      <NoCode />
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
