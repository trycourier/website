interface Props {
    slug: string;
}

async function getPageId({slug}: Props) {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          'Content-Type': 'application/json',
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
        `
        }),
    });
    const data = await response.json();
    const pageId = data.data.textPageCollection.items[0].sys.id;
    return pageId;
}

async function getPageData({pageId}: {pageId: string}) {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: `
            query postEntryQuery {
                textPage(id: "${pageId}") {
                title,
                sys {
                    publishedAt
                },
                slug,
                content {
                    json
                }
                }
            }
        `
        }),
    });
    const data = await response.json();
    let blogPostDetails = data.data.textPage;
    return blogPostDetails;
}

const GetPageData = async ({slug}: Props) => {
    const pageId = await getPageId({slug});
    const pageData = await getPageData({pageId});
    return pageData;
}

export default GetPageData;