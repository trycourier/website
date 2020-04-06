import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Simple from "../templates/simple";

import {
  ArticleCard,
  ArticleHeaderLink,
  ArticleImage,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
  ArticlePosted,
  ArticlePreview,
} from "../components/community/articles";
import BackLink from "../components/community/back-link";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

const tags = ["Long Tag", "Tag", "Regular Tag", "Significantly Longer Tag"];

export const query = graphql`
  query {
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
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

const Community: React.FC = ({ data }: any) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = e => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const searchContent = value => {
    const val = value.toLowerCase();
    const regex = val.search(searchTerm);
    return regex !== -1;
  };

  return (
    <Simple title="Community">
      <h1 style={{ marginBottom: 0 }}>Articles</h1>
      <p style={{ marginTop: 0 }}>.....</p>

      <ArticleScreen>
        <ArticleList>
          {data.allMarkdownRemark.edges.filter(({ node }) => {
              return searchContent(node.frontmatter.title);
            })
          .map(({ node }: any) => (
            <ArticleCard key={node.id}>
              <Link to={node.fields.slug}>
                <ArticleImage
                  src={node.frontmatter.thumbnail}
                  alt={node.frontmatter.title}
                />
              </Link>

              <ArticlePreview>
                <ArticleHeaderLink to={node.fields.slug}>
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
          <BackLink />
        </ArticleList>
        <ArticleSearch>
          <SearchInput onSearch={handleSearchInput} />
          {tags.map(tag => (
            <div
              style={{ width: "100%", textAlign: "right", margin: "16px 0px" }}
            >
              <Tag label={tag} />
            </div>
          ))}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Community;
