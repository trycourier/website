import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";

import IconBack from "../images/icon-back.svg";

import {
  ArticleCard,
  ArticleImage,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
} from "../components/community/articles";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

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

const HeaderLink = styled(Link)`
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
  h1 {
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 2px;
  }
  p.posted {
    ${tw`pt-0`}
    font-size: 14px;
    & strong {
      color: ${colors.textPrimary};
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
      <BackLink to="blog">
        <span>
          <BackImg src={IconBack} alt="Back" /> View all Articles
        </span>
      </BackLink>

      <TaggedContent>
        <TaggedHeader>{posts.length} Posts</TaggedHeader>
        <ArticleScreen>
          <ArticleList>
            {posts.map(({ node }: any) => (
              <ArticleCard key={node.id}>
                <Link to={node.fields.slug}>
                  <ArticleImage
                    src={node.frontmatter.thumbnail}
                    alt={node.frontmatter.title}
                  />
                </Link>

                <div className="px-4">
                  <HeaderLink to={node.fields.slug}>
                    <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                      {node.frontmatter.title}
                    </h4>
                  </HeaderLink>
                  <div className="posted">
                    Posted by <strong>{node.frontmatter.author}</strong> on{" "}
                    <strong>{node.frontmatter.date}</strong>
                  </div>
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
            {/* {tags.map(tag => (
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
        <TaggedFooter>
          <div style={{ borderTop: "1px solid #DDD", padding: 16 }}>
            Tagged: {tag}
          </div>

          <div>
            <BackLink to="blog">
              <span>
                <BackImg src={IconBack} alt="Back" /> View all Articles
              </span>
            </BackLink>
          </div>
        </TaggedFooter>
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </TaggedContent>
    </Simple>
  );
};

export default Tagged;
