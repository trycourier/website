import React from "react";
import { Link, graphql } from "gatsby";

import Simple from "../../templates/simple";

import {
  ArticleCard,
  ArticleList,
  ArticleScreen,
} from "../../components/community/articles";

export const query = graphql`
  query {
    allAuthorYaml(sort: {order: ASC, fields: name}) {
      edges {
        node {
          id
          name
          avatar {
            publicURL
          }
        }
      }
    }
  }
`;

const Authors: React.FC = ({ data }: any) => {
  const authors = data.allAuthorYaml.edges;

  return (
    <Simple title="Courier Blog Authors">
      <h1 style={{ marginBottom: 0 }}>All {authors.length} Authors</h1>
      <p style={{ marginTop: 0 }}>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {authors.map(({node}) => (
            <ArticleCard key={node.id}>
              <Link to={`author/${node.id}`}>
                {node.name}
              </Link>
            </ArticleCard>
          ))}
        </ArticleList>
      </ArticleScreen>
    </Simple>
  );
};

export default Authors;
