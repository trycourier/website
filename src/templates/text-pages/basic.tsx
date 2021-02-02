import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Simple from "../simple";

interface ITextPageProps {
  data: {
    contentfulTextPage: {
      title: string;
      content: {
        json: any;
      }
    }
  };
}

const TextPageBasic: React.FC<ITextPageProps> = ({ data }) => {
  return (
    <Simple title="Basic">
      <h1>{data.contentfulTextPage.title}</h1>
      <div>{documentToReactComponents(data.contentfulTextPage.content.json)}</div>
    </Simple>
  )
}

export default TextPageBasic

export const pageQuery = graphql`
  query($id: String!) {
    contentfulTextPage(id: { eq: $id }) {
      title
      content {
        json
      }
    }
  }
`