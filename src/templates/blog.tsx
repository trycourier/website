import React from "react";
import { Link, graphql } from "gatsby";
import Simple from "./simple";
import Tag from "../components/community/tag";
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        thumbnail
        tags
      }
    }
  }
`;

type GraphQLQuery = {
  data: any;
}

const BlogPost: React.FC<GraphQLQuery> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Simple title={post.frontmatter.title}>
      <Link to="community">
       View all Articles
      </Link>
      <h1>{post.frontmatter.title}</h1>
      <span>Posted by on {post.frontmatter.date}</span>
      <div>
        {post.frontmatter.tags.map((tag: string) => (
          <span style={{ marginRight: 8 }}>
            <Tag>{tag}</Tag>
          </span>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Simple>
  );
};

export default BlogPost;
