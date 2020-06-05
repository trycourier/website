import React, { useState } from "react";
import { graphql } from "gatsby";

import Simple from "../../templates/simple";

import {
  ArticleCard,
  ArticleHeaderLink,
  ArticleImage,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
  ArticlePosted,
  ArticlePreview,
} from "../../components/community/articles";
import SearchInput from "../../components/community/search-input";
import Tag from "../../components/community/tag";

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          frontmatter {
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
`;

const Blog: React.FC = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = e => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const searchContent = value => {
    const val = value.toLowerCase();
    const regex = val.search(searchTerm);
    return regex !== -1;
  };

  const tags = data.allMarkdownRemark.group;

  return (
    <Simple title="Courier Blog">
      <h1 style={{ marginBottom: 0 }}>All Articles</h1>
      <p style={{ marginTop: 0 }}>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {data.allMarkdownRemark.edges
            .filter(({ node }) => {
              return searchContent(node.frontmatter.title);
            })
            .map(({ node }: any) => (
              <ArticleCard key={node.id}>
                <a href={`/${node.fields.slug}`}>
                  <ArticleImage
                    src={node.frontmatter.thumbnail}
                    alt={node.frontmatter.title}
                  />
                </a>
                <ArticlePreview>
                  <ArticleHeaderLink href={`/${node.fields.slug}`}>
                    <h4>{node.frontmatter.title}</h4>
                  </ArticleHeaderLink>
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
                </ArticlePreview>
              </ArticleCard>
            ))}
        </ArticleList>
        <ArticleSearch>
          <SearchInput onSearch={handleSearchInput} />
          {tags.map(tag => (
            <div
              style={{ width: "100%", textAlign: "right", margin: "16px 0px" }}
            >
              <Tag label={tag.fieldValue} /> ( {tag.totalCount} )
            </div>
          ))}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Blog;
