import React, { useState } from "react";
import { graphql } from "gatsby";

import Simple from "../templates/simple";

import {
  ArticleCard,
  ArticleHeaderLink,
  ArticleImage,
  ArticleFooter,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
  ArticlePosted,
  ArticlePreview,
} from "../components/community/articles";
import BackLink from "../components/community/back-link";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

import colors from "../colors";

const tags = ["Example"]

/*export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 5,
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {hidden: {eq: "false"}}
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            hidden
            title
            date(formatString: "MMMM Do, YYYY")
            thumbnail
            tags
            author {
              id
              bio
              name
              twitter
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;*/

export const query = graphql`
  query {
    allContentfulPost(
      limit: 5,
      sort: { fields: createdAt, order: DESC }
    ) {
      totalCount
      group(field: tags___name) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          slug
          title
          createdAt(formatString: "MMMM Do, YYYY")
          thumbnail {
            file {
              url
            }
          }
          tags {
            name
          }
          authors {
            slug
            name
            twitter
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`

const Community: React.FC = ({ data }: any) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = e => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const articles = data.allContentfulPost.edges;

  const searchContent = value => {
    const val = value.toLowerCase();
    const regex = val.search(searchTerm);
    return regex !== -1;
  };

  const tags = data.allContentfulPost.group;

  return (
    <Simple title="Community">
      <h1 style={{ marginBottom: 0 }}>Blog</h1>
      <p style={{ marginTop: 0 }}>Stay up to date on the latest from Courier.</p>

      <ArticleScreen>
        <ArticleList>
          {articles.filter(({ node }) => {
              return searchContent(node.title);
            })
          .map(({ node }: any, idx: Number) => (
            <ArticleCard key={node.id} key={idx}>
              <a href={node.slug}>
                <ArticleImage
                  src={node.thumbnail.file.url}
                  alt={node.title}
                />
              </a>

              <ArticlePreview>
                <ArticleHeaderLink href={`/blog/${node.slug}`}>
                  <h4>{node.title}</h4>
                </ArticleHeaderLink>
                <ArticlePosted
                  id={node.authors[0].slug}
                  name={node.authors[0].name}
                  date={node.createdAt}
                />
                <p className="excerpt">{node.excerpt.excerpt}</p>
                <div>
                  {node.tags.map((tag: string, idx: number) => (
                    <span style={{ marginRight: 8 }} key={idx}>
                      <Tag label={tag.name} />
                    </span>
                  ))}
                </div>
              </ArticlePreview>
            </ArticleCard>
          ))}
          <ArticleFooter>
            <div
              style={{
                borderTop: `1px solid ${colors.lightGray}`,
                paddingTop: 16,
              }}
            >
              First 5 Articles
            </div>
            <BackLink />
          </ArticleFooter>
        </ArticleList>
        <ArticleSearch>
          <SearchInput onSearch={handleSearchInput} />
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
    </Simple>
  );
};

export default Community;
