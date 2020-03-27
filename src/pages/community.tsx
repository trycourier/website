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
  ArticlePreview,
} from "../components/community/articles";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

const placeholder = {
  image: {
    src: "https://placekeanu.com/220/160",
    desc: "Sunset in the mountains",
  },
  title:
    "How we organize our jobs for our new customers and how we satisfy them.",
  author: "Name of Person",
  published: "February 2nd, 2021",
  html: `Ut auctor ligula id aliquam sollicitudin. Maecenas tincidunt nisl et dignissim dapibus. Etiam eget varius neque. Donec et dapibus diam, aliquam egestas quam. Curabitur condimentum nibh non augue facilisis, vitae pharetra metus consequat. Donec ac urna ac mauris commodo pharetra ut ac mi. `,
};

const tags = ["Long Tag", "Tag", "Regular Tag", "Significantly Longer Tag"];

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            thumbnail
            tags
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
      <h1 style={{ marginBottom: 0 }}>Community</h1>
      <p style={{ marginTop: 0 }}>...</p>

      <h2>Upcoming Events</h2>
      <p>Join Us!</p>

      <h2>Articles</h2>
      <p>.....</p>
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
                  alt={placeholder.image.desc}
                />
              </Link>

              <ArticlePreview>
                <ArticleHeaderLink to={node.fields.slug}>
                  <h4>{node.frontmatter.title}</h4>
                </ArticleHeaderLink>
                <div className="posted">
                  Posted by <strong>{placeholder.author}</strong> on{" "}
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
              <Tag label={tag} />
            </div>
          ))}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Community;
