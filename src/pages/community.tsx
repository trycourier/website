import React from "react";
import { Link, graphql } from "gatsby";
import Simple from "../templates/simple";

import {
  ArticleCard,
  ArticleImage,
  ArticleList,
  ArticleScreen,
  ArticleSearch,
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
  published: "February 2md, 2021",
  html: `Ut auctor ligula id aliquam sollicitudin. Maecenas tincidunt nisl et dignissim dapibus. Etiam eget varius neque. Donec et dapibus diam, aliquam egestas quam. Curabitur condimentum nibh non augue facilisis, vitae pharetra metus consequat. Donec ac urna ac mauris commodo pharetra ut ac mi. `,
};

const articles = [
  {
    image: {
      src: "https://placekitten.com/220/160",
      desc: "Sunset in the mountains",
    },
    title: "Notification Design Studio",
    author: "Name of Person",
    published: "Date/Time",
    html: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
  },
  {
    image: {
      src: "https://placekeanu.com/220/160",
      desc: "Sunset in the mountains",
    },
    title:
      "How we organize our jobs for our new customers and how we satisfy them.",
    author: "Name of Person",
    published: "February 2md, 2021",
    html: `Ut auctor ligula id aliquam sollicitudin. Maecenas tincidunt nisl et dignissim dapibus. Etiam eget varius neque. Donec et dapibus diam, aliquam egestas quam. Curabitur condimentum nibh non augue facilisis, vitae pharetra metus consequat. Donec ac urna ac mauris commodo pharetra ut ac mi. `,
  },
  {
    image: {
      src: "http://www.fillmurray.com/220/160",
      desc: "Sunset in the mountains",
    },
    title: "Notification Design Studio",
    author: "Name of Person",
    published: "Date/Time",
    html: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
  },
];

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
            date(formatString: "DD MMMM, YYYY")
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

const Community: React.FC = ({ data }) => {
  return (
    <Simple title="Community">
      <h1>All Articles</h1>
      <p>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ArticleCard key={node.id}>
              <Link to={node.fields.slug}>
                <ArticleImage
                  src={node.frontmatter.thumbnail}
                  alt={placeholder.image.desc}
                />
              </Link>

              <div className="px-4">
                <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                  {node.frontmatter.title}
                </h4>
                <div className="posted">
                  Posted by <strong>{placeholder.author}</strong> on{" "}
                  <strong>{node.frontmatter.date}</strong>
                </div>
                <p className="excerpt">{node.excerpt}</p>
                <div>
                  {node.frontmatter.tags.map((tag: string) => (
                    <span style={{ marginRight: 8 }}>
                      <Tag>{tag}</Tag>
                    </span>
                  ))}
                </div>
              </div>
            </ArticleCard>
          ))}

          {articles.map(article => (
            <ArticleCard>
              <ArticleImage src={article.image.src} alt={article.image.desc} />
              <div className="px-4">
                <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                  {article.title}
                </h4>
                <div className="posted">
                  Posted by <strong>{article.author}</strong> on{" "}
                  <strong>{article.published}</strong>
                </div>
                <p className="excerpt">{article.html}</p>
                <div className="px-6 py-4">
                  <Link>Read More</Link>
                </div>
              </div>
            </ArticleCard>
          ))}
        </ArticleList>
        <ArticleSearch>
          <SearchInput />
          {tags.map(tag => (
            <div
              style={{ width: "100%", textAlign: "right", margin: "16px 0px" }}
            >
              <Tag>{tag.label}</Tag>
            </div>
          ))}
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Community;
