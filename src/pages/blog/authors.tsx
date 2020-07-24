import React from "react";
import { graphql, Link } from "gatsby";

import Simple from "../../templates/simple";

import {
  ArticleCard,
  ArticleList,
  ArticleScreen,
} from "../../components/community/articles";

export const query = graphql`
  query {
    allContentfulAuthor(sort: {order: ASC, fields: name}) {
      edges {
        node {
          id
          name
          twitter
          slug
        }
      }
    }
  }
`;

const Authors: React.FC = ({ data }: any) => {
  const authors = data.allContentfulAuthor.edges;

  return (
    <Simple title="Courier Blog Authors">
      <h1 style={{ marginBottom: 0 }}>All {authors.length} Authors</h1>
      <p style={{ marginTop: 0 }}>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {authors.map(({node}) => (
            <ArticleCard key={node.id}>
              <Link to={`/blog/authors/${node.slug}`}>
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
