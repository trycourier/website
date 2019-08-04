import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Editor = styled.div`
  ${tw`py-24 pb-0`}
`;

const EditorText = styled.div`
  ${tw`text-center w-1/2 mx-auto pb-0 mb-0`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
  }
`;

const EditorImageWrapper = styled.div`
  ${tw`w-2/3 mx-auto`}
`;

const EditorComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Template@2x.png" }) {
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
        <p>Save time by using our Visual Editor to create a single message that is reusable across all channels, or tweak the message for each specific channel if you'd prefer.</p>
      </EditorText>
      <EditorImageWrapper>
        <Image image={img} />
      </EditorImageWrapper>
    </Editor>
  );
};

export default EditorComponent;