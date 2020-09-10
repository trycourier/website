import React, { useState } from "react";
import { graphql, Link } from "gatsby";

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
    groupedTags: allContentfulPost {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
    allContentfulPost(sort: { fields: publishDate, order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          tags {
            id
            name
            slug
          }
          authors {
            id
            name
            twitter
            slug
          }
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          publishDate(formatString: "MMMM Do, YYYY")
          thumbnail {
            fluid(maxWidth: 220) {
              ...GatsbyContentfulFluid
            }
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;

const Blog: React.FC = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const searchContent = (value) => {
    const val = value.toLowerCase();
    const regex = val.search(searchTerm);
    return regex !== -1;
  };

  const tags = data.groupedTags.group;

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
                <Link to={`/blog/${node.slug}`}>
                  <ArticleImage fluid={node.thumbnail.fluid} alt={node.title} />
                </Link>
                <ArticlePreview>
                  <ArticleHeaderLink to={`/blog/${node.slug}`}>
                    <h4>{node.title}</h4>
                  </ArticleHeaderLink>
                  <ArticlePosted
                    id={node.authors[0].slug}
                    name={node.authors[0].name}
                    date={node.publishDate || node.createdAt}
                  />
                  <p className="excerpt">{node.excerpt.excerpt}</p>
                  <div>
                    {node.tags.map(
                      (tag: { name: string; id: string; slug: string }) => (
                        <span style={{ marginRight: 8 }} key={tag.id}>
                          <Tag label={tag.name} slug={tag.slug} />
                        </span>
                      )
                    )}
                  </div>
                </ArticlePreview>
              </ArticleCard>
            ))}
        </ArticleList>
        <ArticleSearch>
          <SearchInput onSearch={handleSearchInput} />
          {tags.map(
            (tag: { fieldValue: string; totalCount: Number }, idx: Number) => (
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  margin: "16px 0px",
                }}
                key={`${idx}`}
              >
                <Tag label={tag.fieldValue} /> ( {tag.totalCount} )
              </div>
            )
          )}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Blog;
