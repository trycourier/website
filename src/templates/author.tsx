import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";

import BackLink from "../components/community/back-link";

import {
  ArticleCard,
  ArticleImage,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
  ArticlePosted,
} from "../components/community/articles";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

import colors from "../colors";
// import { MDXRenderer } from "gatsby-plugin-mdx"

const HeaderLink = styled.a`
  ${tw`no-underline`}
  & :hover {
    text-decoration: underline;
  }
`;

const AuthoredContent = styled.div`
  ${tw`mt-8`}
`;

const AuthoredHeader = styled.div`
  ${tw`text-center`}
  h2 {
    font-weight: 400;
    margin-bottom: 2px;
    & strong {
      background: #dbf1ff;
      color: #26699e;
      padding: 8px;
      border-radius: 4px;
      font-weight: 400;
    }
  }
`;

const AuthoredFooter = styled.div`
  ${tw`flex justify-between mt-4`}
`;

/*
export const query = graphql`
  query ($authorId: String!){
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { author: { id: { eq: $authorId } } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            thumbnail
            tags
            date
            author {
              id
              name
            }
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
*/

export const query = graphql`
  query ($authorId: [String]){
    allContentfulPost(
      limit: 1000
      filter: { authors: {elemMatch: {slug: {in: $authorId}}}}
    ) {
      totalCount
      group(field: tags___name) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          title
          tags {
            id
            name
          }
          content {
            childContentfulRichText {
              timeToRead
            }
          }
          createdAt(formatString: "MMMM Do, YYYY")
          thumbnail {
            file {
              url
            }
          }
          authors {
            slug
            name
          }
          slug
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;

type AuthoredTypes = {
  pageContext: any;
  data: any;
};

const Authored: React.FC<AuthoredTypes> = ({ pageContext, data }) => {
  const { author } = pageContext;
  const posts = data.allContentfulPost.edges;
  const tags = data.allContentfulPost.group;

  return (
    <Simple title={`Authored: ${author.name}`}>
      <BackLink />

      <AuthoredContent>
        <AuthoredHeader>
          <h2>
            {posts.length} Post{posts.length !== 1 && "s"} Authored by:{" "}
            <strong>{author.name}</strong>
          </h2>
        </AuthoredHeader>
        <ArticleScreen>
          <ArticleList>
            {posts.map(({ node }: any) => (
              <ArticleCard key={node.id}>
                <a href={`/blog/${node.slug}`}>
                  <ArticleImage
                    src={node.thumbnail.file.url}
                    alt={node.title}
                  />
                </a>

                <div className="px-4">
                  <HeaderLink href={`/blog/${node.slug}`}>
                    <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                      {node.title}
                    </h4>
                  </HeaderLink>
                  <ArticlePosted
                    id={node.authors[0].slug}
                    name={node.authors[0].name}
                    date={node.createdAt}
                  />
                  <p className="excerpt">{node.excerpt.excerpt}</p>
                  <div>
                    {node.tags.map((tag: {name: string, id: string}) => (
                      <span style={{ marginRight: 8 }} key={tag.id}>
                        <Tag label={tag.name} />
                      </span>
                    ))}
                  </div>
                </div>
              </ArticleCard>
            ))}
          </ArticleList>
          <ArticleSearch>
            {false && (<SearchInput />)}
            {tags.map((tag: {fieldValue: string, totalCount: Number}, idx: Number) => (
            <div
              style={{ width: "100%", textAlign: "right", margin: "16px 0px" }}
              key={`${idx}`}
            >
              <Tag label={tag.fieldValue} /> ( {tag.totalCount} )
            </div>
          ))}
          </ArticleSearch>
        </ArticleScreen>
        <AuthoredFooter>
          <div style={{ borderTop: "1px solid #DDD", padding: 16 }}>
            Authored: {author.name}
          </div>

          <BackLink />
        </AuthoredFooter>
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </AuthoredContent>
    </Simple>
  );
};

export default Authored;
