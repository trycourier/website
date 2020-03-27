import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Simple from "../templates/simple";

import {
  ArticleCard,
  ArticleImage,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
  ArticlePreview,
} from "../components/community/articles";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

const HeaderLink = styled(Link)`
  ${tw`no-underline`}
  & :hover {
    text-decoration: underline;
  }
`;

const placeholder = {
  image: {
    src: "https://placekeanu.com/220/160",
    desc: "Sunset in the mountains",
  },
  title: "How we organize our jobs for our new customers and how we satisfy them.",
  author: "Name of Person",
  published: "February 2nd, 2021",
  html: `Ut auctor ligula id aliquam sollicitudin. Maecenas tincidunt nisl et dignissim dapibus. Etiam eget varius neque. Donec et dapibus diam, aliquam egestas quam. Curabitur condimentum nibh non augue facilisis, vitae pharetra metus consequat. Donec ac urna ac mauris commodo pharetra ut ac mi. `,
};

const tags = [{ label: "Long Tag" }, { label: "Tag" }];

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
  return (
    <Simple title="Community">
      <h1 style={{ marginBottom: 0 }}>Community</h1>
      <p style={{ marginTop: 0 }}>...</p>

      <h2>Events</h2>
      <p>Coming Soon...</p>
      
      <h2>Articles</h2>
      <ArticleScreen>
        <ArticleList>
          {data.allMarkdownRemark.edges.map(({ node }: any) => (
            <ArticleCard key={node.id}>
              <Link to={node.fields.slug}>
                <ArticleImage
                  src={node.frontmatter.thumbnail}
                  alt={placeholder.image.desc}
                />
              </Link>

              <ArticlePreview>
                <HeaderLink to={node.fields.slug}>
                  <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                    {node.frontmatter.title}
                  </h4>
                </HeaderLink>
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
          <SearchInput />
          {tags.map(tag => (
            <div
              style={{ width: "100%", textAlign: "right", margin: "16px 0px" }}
            >
              <Tag label={tag.label} />
            </div>
          ))}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Community;
