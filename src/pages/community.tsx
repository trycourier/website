import React, { useState } from "react";
import { graphql, Link } from "gatsby";

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

export const query = graphql`
  query {
    groupedTags: allContentfulPost {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
    allContentfulPost(
      limit: 5,
      sort: { fields: publishDate, order: DESC }
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
          publishDate(formatString: "MMMM Do, YYYY")
          thumbnail {
            fluid(maxWidth: 220) {
              ...GatsbyContentfulFluid
            }
          }
          tags {
            name
            slug
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

  const tags = data.groupedTags.group;

  return (
    <Simple title="Community">
      <h1 style={{ marginBottom: 0 }}>Blog</h1>
      <p style={{ marginTop: 0 }}>Stay up to date on the latest from Courier.</p>

      <ArticleScreen>
        <ArticleList>
          {articles.filter(({ node }) => {
              return searchContent(node.title);
            })
          .map(({ node }: any) => (
            <ArticleCard key={node.id}>
              <Link to={`/blog/${node.slug}`}>
                <ArticleImage
                  fluid={node.thumbnail.fluid}
                  alt={node.title}
                />
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
                  {node.tags.map((tag: {name: string, slug: string}, idx: number) => (
                    <span style={{ marginRight: 8 }} key={idx}>
                      <Tag label={tag.name} slug={tag.slug} />
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
