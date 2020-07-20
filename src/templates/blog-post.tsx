import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";
import Tag from "../components/community/tag";
import BackLink from "../components/community/back-link";

import colors from "../colors";
// import { MDXRenderer } from "gatsby-plugin-mdx"

import { ArticlePosted, AuthorCard } from "../components/community/articles";

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

const BlogFooter = styled.div`
  ${tw`flex justify-between mt-4`}
`;

/*
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author {
          id
          bio
          name
          twitter
        }
        headerImage
        tags
      }
    }
  }
`;
*/

export const query = graphql`
  query($slug: String!) {
    contentfulPost( slug: { eq: $slug }) {
      title
      authors {
        name
        twitter
        slug
        avatar {
          fluid(maxHeight: 100) {
            src
          }
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
      tags {
        id
        name
      }
      headerImage {
        file {
          url
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      excerpt {
        excerpt
      }
    }
  }
`;

type GraphQLQuery = {
  data: any;
};

const BlogPost: React.FC<GraphQLQuery> = ({ data }) => {
  const post = data.contentfulPost;
  return (
    <Simple title={post.title} description={post.excerpt.excerpt}>
      <BackLink />

      <BlogContent>
        <img src={post.headerImage.file.url} style={{ borderRadius: 10 }} />
        <BlogHeader>
          {false && <h1>{post.title}</h1>}
          <ArticlePosted
            id={post.authors[0].slug}
            name={post.authors[0].name}
            date={post.createdAt}
          />
          <div>
            {post.tags.map((tag: string, idx: number) => (
              <span key={`tag-${idx}`} style={{ marginRight: 8 }}>
                <Tag label={tag.name} />
              </span>
            ))}
          </div>
        </BlogHeader>
        <BlogBody dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <BlogFooter>
          <div
            style={{
              borderTop: `1px solid ${colors.lightGray}`,
              paddingTop: 16,
            }}
          >
            <AuthorCard
              id={post.authors[0].slug}
              name={post.authors[0].name}
              avatar={post.authors[0].avatar.fluid.src}
            />
          </div>
          <BackLink />
        </BlogFooter>
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </BlogContent>
    </Simple>
  );
};

export default BlogPost;
