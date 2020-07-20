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

/*export const query = graphql`
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
`;*/

export const query = graphql`
  query {
    allContentfulPost(sort: {fields: createdAt, order: DESC}) {
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
          authors {
            id
            name
            twitter
            slug
          }
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          thumbnail {
            file {
              url
            }
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`

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

  const tags = data.allContentfulPost.group;

  return (
    <Simple title="Courier Blog">
      <h1 style={{ marginBottom: 0 }}>All Articles</h1>
      <p style={{ marginTop: 0 }}>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {data.allContentfulPost.edges
            .filter(({ node }) => {
              return searchContent(node.title);
            })
            .map(({ node }: any) => (
              <ArticleCard key={node.id}>
                <a href={`/blog/${node.slug}`}>
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
                    {node.tags.map((tag: {name: string, id: string}) => (
                      <span style={{ marginRight: 8 }} key={tag.id}>
                        <Tag label={tag.name} />
                      </span>
                    ))}
                  </div>
                </ArticlePreview>
              </ArticleCard>
            ))}
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

export default Blog;
