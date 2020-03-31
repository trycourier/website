/*
query MyQuery {
  allMarkdownRemark {

    }
  }
}
*/

import React from "react";
import { Link, graphql } from "gatsby";

import Simple from "../../templates/simple";

import {
  ArticleCard,
  ArticleList,
  ArticleScreen,
} from "../../components/community/articles";
// import Tag from "../../components/community/tag";

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { author: { id: { eq: "Aydrian" } } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
`;

const Blog: React.FC = ({ data }: any) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <Simple title="Courier Blog Articles from Aydrian">
      <h1 style={{ marginBottom: 0 }}>All Tags</h1>
      <p style={{ marginTop: 0 }}>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {articles.map(({ node }) => (
            <ArticleCard key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </ArticleCard>
          ))}
        </ArticleList>
      </ArticleScreen>
    </Simple>
  );
};

export default Blog;
