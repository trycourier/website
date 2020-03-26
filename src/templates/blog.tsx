import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";
import Tag from "../components/community/tag";
import IconBack from "../images/icon-back.svg";

import colors from "../colors";
// import { MDXRenderer } from "gatsby-plugin-mdx"

const BackImg = styled.img`
  ${tw`relative`}
  top: 10px;
  transition-duration: 300ms;
`;

const BackLink = styled(Link)`
  ${tw`no-underline items-center justify-between py-2 px-6 mb-8`}
  background: ${colors.berryGlass};
  color: ${colors.berry};
  border-radius: 4px;
  & :hover {
    filter: darken(10%);
    & img {
      transform: translate3d(-5px, 0, 0);
    }
  }
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
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
};

const BlogPost: React.FC<GraphQLQuery> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Simple title={post.frontmatter.title}>
      <BackLink to="community">
        <span><BackImg src={IconBack} alt="Back" /> View all Articles</span>
      </BackLink>

      <div style={{ marginTop: 32 }}>
        <img src="https://placekeanu.com/1000/450" style={{ borderRadius: 10 }}/>
        <h1>{post.frontmatter.title}</h1>
        <span>Posted by on {post.frontmatter.date}</span>
        <div>
          {post.frontmatter.tags.map((tag: string, idx: number) => (
            <span key={`tag-${idx}`} style={{ marginRight: 8 }}>
              <Tag>{tag}</Tag>
            </span>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </div>
    </Simple>
  );
};

export default BlogPost;
