import React from "react";
import { Link, graphql } from "gatsby";

import Simple from "../../templates/simple";

import {
  ArticleCard,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
} from "../../components/community/articles";

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
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
  const tags = data.allMarkdownRemark.group;

  return (
    <Simple title="Courier Blog Authors">
      <h1 style={{ marginBottom: 0 }}>All {authors.length} Authors</h1>
      <p style={{ marginTop: 0 }}>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {authors.map(({node}) => (
            <ArticleCard key={node.id}>
              <Link to={`blog/author/${node.id}`}>
                {node.name}
              </Link>
            </ArticleCard>
          ))}
        </ArticleList>
        <ArticleSearch>
          <SearchInput onSearch={handleSearchInput} />
          {tags.map(tag => (
            <div
              style={{ width: "100%", textAlign: "right", margin: "16px 0px" }}
            >
              <Tag label={tag.fieldValue} /> ( {tag.totalCount} )
            </div>
          ))}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Authors;
