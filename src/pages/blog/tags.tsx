import React from "react";
import { graphql, Link } from "gatsby";

import Simple from "../../templates/simple";

import {
  ArticleCard,
  ArticleList,
  ArticleScreen,
} from "../../components/community/articles";
import Tag from "../../components/community/tag";

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      totalCount
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`;

const Blog: React.FC = ({ data }: any) => {
  const tags = data.allContentfulPost.group;

  return (
    <Simple title="Courier Blog Tags">
      <h1 style={{ marginBottom: 0 }}>All Tags</h1>
      <p style={{ marginTop: 0 }}></p>
      <ArticleScreen>
        <ArticleList>
          {tags.map(({ fieldValue, totalCount }) => (
            <ArticleCard key={fieldValue}>
              <Link to={fieldValue}>
                <Tag label={fieldValue}> ( {totalCount} ) </Tag>
              </Link>
            </ArticleCard>
          ))}
        </ArticleList>
      </ArticleScreen>
    </Simple>
  );
};

export default Blog;
