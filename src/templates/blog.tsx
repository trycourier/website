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

const BlogContent = styled.div`
  ${tw`mt-8`}
`;

const BlogHeader = styled.div`
  ${tw`text-center`}
  h1 {
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 2px;
  }
  p.posted {
    ${tw`pt-0`}
    font-size: 16px;
    & strong {
      color: ${colors.textPrimary};
    }
  }
`;

const BlogBody = styled.div`
  ${tw`mt-8`}
  p {
    font-size: 16px;
    line-height: 24px;
    color: ${colors.textPrimary};
    & img {
      text-align: center;
      margin: 16px auto;
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
        date(formatString: "MMMM Do, YYYY")
        author
        headerImage
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

      <BlogContent>
        <img src={post.frontmatter.headerImage} style={{ borderRadius: 10 }}/>
        <BlogHeader>
          <h1>{post.frontmatter.title}</h1>
          <p class="posted">Posted by <strong>{post.frontmatter.author}</strong> on <strong>{post.frontmatter.date}</strong></p>
          <div>
            {post.frontmatter.tags.map((tag: string, idx: number) => (
              <span key={`tag-${idx}`} style={{ marginRight: 8 }}>
                <Tag>{tag}</Tag>
              </span>
            ))}
          </div>
        </BlogHeader>
        <BlogBody dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </BlogContent>
    </Simple>
  );
};

export default BlogPost;
