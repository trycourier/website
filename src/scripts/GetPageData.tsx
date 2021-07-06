import { Document } from "@contentful/rich-text-types";

interface Props {
  slug: string;
}

export interface PageData {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  content: {
    json: { content: Document[] };
    links: { entries: { block: Array<{ sys: { id: string }; key?: string }> } };
  };
}

async function getPageId({ slug }: Props) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query textPageCollectionQuery {
                textPageCollection(where: {slug:"${slug}"}) {
                    items {
                        sys {
                            id
                        }
                    }
                }
            }
        `,
      }),
    }
  );
  const data = await response.json();
  const pageId = data.data.textPageCollection.items[0].sys.id;
  return pageId;
}

async function getPageData({ pageId }: { pageId: string }) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query textPageQuery($id: String!) {
            textPage(id: $id) {
              title
              metaTitle
              metaDescription
              sys {
                publishedAt
              }
              slug
              content {
                json
                links {
                  entries {
                    block {
                      sys {
                        id
                      }
                      ... on WidgetBlock {
                        key
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { id: pageId },
      }),
    }
  );
  const data = await response.json();
  const pageDetails: PageData = data.data.textPage;
  return pageDetails;
}

const GetPageData = async ({ slug }: Props) => {
  const pageId = await getPageId({ slug });
  const pageData = await getPageData({ pageId });
  return pageData;
};

export default GetPageData;
