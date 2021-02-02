import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, Block, Inline } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";

import Simple from "../simple";
import widgets from "../../widget-blocks";

interface IWidgetBlockNode extends Block {
  data: {
    target: {
      fields: {
        key: {
          'en-US': string;
        }
      }
    }
  }
}

const resolveCustomComponent = (key: string): React.ReactNode => {
  const Widget = widgets.get(key)
  if (Widget) {
    return <Widget />
  } else {
    return <pre>{key}</pre>
  }
}

const documentToReactComponentsOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
      const key = (node as IWidgetBlockNode).data.target.fields.key["en-US"]
      return resolveCustomComponent(key)
    }
  }
};

interface ITextPageProps {
  data: {
    contentfulPage: {
      title: string;
      content: {
        json: any;
      }
    }
  };
}

const TextPageBasic: React.FC<ITextPageProps> = ({ data }) => {
  const DEBUG = false
  return (
    <Simple title={data.contentfulPage.title}>
      <h1>{data.contentfulPage.title}</h1>
      {DEBUG ? (
        <pre>
          {JSON.stringify(data.contentfulPage.content.json, undefined, 2)}
        </pre>
      ) : (
        <div>{documentToReactComponents(data.contentfulPage.content.json, documentToReactComponentsOptions)}</div>
      )}
    </Simple>
  )
}

export default TextPageBasic

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      content {
        json
      }
    }
  }
`