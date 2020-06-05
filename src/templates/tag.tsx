import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";

import {
  ArticleCard,
  ArticleImage,
  ArticleList,
  ArticlePosted,
  ArticleScreen,
  ArticleSearch,
} from "../components/community/articles";
import BackLink from "../components/community/back-link";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

// import { MDXRenderer } from "gatsby-plugin-mdx"

const HeaderLink = styled.a`
  ${tw`no-underline`}
  & :hover {
    text-decoration: underline;
  }
`;

const TaggedContent = styled.div`
  ${tw`mt-8`}
`;

const TaggedHeader = styled.div`
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

const TaggedFooter = styled.div`
  ${tw`flex justify-between mt-4`}
`;

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tags
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            thumbnail
            tags
            author {
              id
              name
            }
          }
        }
      }
    }
  }
`;

type TaggedTypes = {
  pageContext: any;
  data: any;
};

const Tagged: React.FC<TaggedTypes> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Simple title={`Tagged: ${tag}`}>
      <BackLink />

      <TaggedContent>
        <TaggedHeader>
          <h2>
            {posts.length} Post{posts.length !== 1 && "s"} tagged:{" "}
            <strong>{tag}</strong>
          </h2>
        </TaggedHeader>
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
            <SearchInput />
          </ArticleSearch>
        </ArticleScreen>
        <TaggedFooter>
          <div style={{ borderTop: "1px solid #DDD", padding: 16 }}>
            Tagged: {tag}
          </div>

          <BackLink />
        </TaggedFooter>
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </TaggedContent>
    </Simple>
  );
};

export default Tagged;
