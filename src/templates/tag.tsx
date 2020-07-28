import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";

import {
  ArticleCard,
  ArticleImage,
  ArticleList,
  ArticlePosted,
  ArticleScreen,
  ArticleSearch,
} from "../components/community/articles";
import BackLink from "../components/community/back-link";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

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
  h2 {
    font-weight: 400;
    margin-bottom: 2px;
    & strong {
      background: #dbf1ff;
      color: #26699e;
      padding: 8px;
      border-radius: 4px;
      font-weight: 400;
    }
  }
`;

const TaggedFooter = styled.div`
  ${tw`flex justify-between mt-4`}
`;

export const query = graphql`
  query($slug: String!) {
    groupedTags: allContentfulPost {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
    allContentfulPost(
      limit: 1000
      filter: { tags: {elemMatch: {slug: {eq: $slug}}}}
    ) {
      totalCount
      edges {
        node {
          id
          slug
          tags {
            id
            name
            slug
          }
          title
          createdAt(formatString: "MMMM Do, YYYY")
          publishDate(formatString: "MMMM Do, YYYY")
          thumbnail {
            fluid(maxWidth: 220) {
              src
            }
          }
          authors {
            id
            name
            slug
          }
          excerpt {
            excerpt
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
  const posts = data.allContentfulPost.edges;
  const tags = data.groupedTags.group;

  return (
    <Simple title={`Tagged: ${tag.name}`}>
      <BackLink />

      <TaggedContent>
        <TaggedHeader>
          <h2>
            {posts.length} Post{posts.length !== 1 && "s"} tagged:{" "}
            <strong>{tag.name}</strong>
          </h2>
        </TaggedHeader>
        <ArticleScreen>
          <ArticleList>
            {posts.map(({ node }: any) => (
              <ArticleCard key={node.id}>
                <Link to={`/blog/${node.slug}`}>
                  <ArticleImage
                    src={node.thumbnail.fluid.src}
                    alt={node.title}
                  />
                </Link>

                <div className="px-4">
                  <HeaderLink to={`/blog/${node.slug}`}>
                    <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                      {node.title}
                    </h4>
                  </HeaderLink>
                  <ArticlePosted
                    id={node.authors[0].slug}
                    name={node.authors[0].name}
                    date={node.publishDate || node.createdAt}
                  />
                  <p className="excerpt">{node.excerpt.excerpt}</p>
                  <div>
                    {node.tags.map((tag: {name: string, id: string, slug: string}) => (
                      <span style={{ marginRight: 8 }} key={tag.id}>
                        <Tag label={tag.name} slug={tag.slug} />
                      </span>
                    ))}
                  </div>
                </div>
              </ArticleCard>
            ))}
          </ArticleList>
          <ArticleSearch>
            {false && <SearchInput />}
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
        <TaggedFooter>
          <div style={{ borderTop: "1px solid #DDD", padding: 16 }}>
            Tagged: {tag.name}
          </div>

          <BackLink />
        </TaggedFooter>
      </TaggedContent>
    </Simple>
  );
};

export default Tagged;
