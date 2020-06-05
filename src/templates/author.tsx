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

type AuthoredTypes = {
  pageContext: any;
  data: any;
};

const Authored: React.FC<AuthoredTypes> = ({ pageContext, data }) => {
  const { author } = pageContext;
  const posts = data.allMarkdownRemark.edges;
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
                <a href={`/${node.fields.slug}`}>
                  <ArticleImage
                    src={node.frontmatter.thumbnail}
                    alt={node.frontmatter.title}
                  />
                </a>

                <div className="px-4">
                  <HeaderLink href={`/${node.fields.slug}`}>
                    <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                      {node.frontmatter.title}
                    </h4>
                  </HeaderLink>
                  <ArticlePosted
                    id={node.frontmatter.author.id}
                    name={node.frontmatter.author.name}
                    date={node.frontmatter.date}
                  />
                  <p className="excerpt">{node.excerpt}</p>
                  <div>
                    {node.frontmatter.tags.map((tag: string) => (
                      <span style={{ marginRight: 8 }}>
                        <Tag label={tag} />
                      </span>
                    ))}
                  </div>
                </div>
              </ArticleCard>
            ))}
          </ArticleList>
          <ArticleSearch>
            {/*<SearchInput />
             {tags.map(tag => (
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  margin: "16px 0px",
                }}
              >
                <Tag>{tag.label}</Tag>
              </div>
            ))} */}
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
