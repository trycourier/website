import client from "./contentfulClient";
import GetSimilarBlogs from "./GetSimilarBlogs";

interface Props {
  slug: string;
  isPreview?: boolean;
}

async function getBlogPostId({ slug, isPreview }: Props) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          isPreview
            ? process.env.CONTENTFUL_PREVIEW_API_KEY
            : process.env.CONTENTFUL_API_KEY
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query postEntryQuery {
            postCollection(where: {slug:"${slug}"}, preview: ${
          isPreview ? true : false
        }) {
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
  const blogPostId = data.data.postCollection.items[0].sys.id;
  return blogPostId;
}

async function getBlogPostDetails({
  blogPostId,
  isPreview,
}: {
  blogPostId: string;
  isPreview?: boolean;
}) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          isPreview
            ? process.env.CONTENTFUL_PREVIEW_API_KEY
            : process.env.CONTENTFUL_API_KEY
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query postEntryQuery {
                post(id: "${blogPostId}" preview: ${isPreview ? true : false}) {
                    title,
                    metaTitle,
                    metaDescription,
                    excerpt,
                    publishDate,
                    ctaText,
                    slug,
                    authorsCollection {
                        items {
                            name
                            avatar {
                                url
                            }
                        }
                    },
                    tagsCollection {
                        items { name slug }
                    }
                    headerImage {
                        title
                        url
                    }
                    contentMd
                    content {
                        json
                        links {
                            assets {
                                block {
                                    sys { id  }
                                    title
                                    url
                                    width
                                    height
                                }
                            }
                            entries {
                                block {
                                    sys { id }
                                    ... on CodeSnippet {
                                        title
                                        language
                                        code
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
      }),
    }
  );
  const data = await response.json();
  let blogPostDetails = data.data.post;
  const blogImages: any = {};
  const imagesArrRaw = data.data.post.content.links.assets.block;
  for (let index = 0; index < imagesArrRaw.length; index++) {
    const thisImage = imagesArrRaw[index];
    const { url, height, width, title } = thisImage;
    blogImages[thisImage.sys.id] = {
      url,
      height,
      width,
      title,
    };
  }
  blogPostDetails.images = blogImages;

  const blogSnippets: any = {};
  const codeSnippetsArrRaw = data.data.post.content.links.entries.block;
  for (let index = 0; index < codeSnippetsArrRaw.length; index++) {
    const thisSnippet = codeSnippetsArrRaw[index];
    blogSnippets[thisSnippet.sys.id] = {
      title: thisSnippet.title,
      language: thisSnippet.language,
      code: thisSnippet.code,
    };
  }
  blogPostDetails.snippets = blogSnippets;

  // Extract assets from markdown content and fetch their width/height
  const imageRegex = /\(\/\/images\.ctfassets\.net\/(?:.+?)\/(.+?)\/(?:.+?)\/(?:.+?)\)/g;
  const matches = [...(blogPostDetails.contentMd || "").matchAll(imageRegex)];
  const assetIds = Array.from(new Set(matches.map((match) => match[1])));
  const assets = await Promise.all(
    assetIds.map((assetId) => client.getAsset(assetId))
  );
  const imageDimensions = assets.reduce(
    (obj, asset) => ({
      ...obj,
      [asset.fields.file.url]: asset.fields.file.details.image,
    }),
    {}
  );
  blogPostDetails.imageDimensions = imageDimensions;

  return blogPostDetails;
}

async function getMostPopularBlogs() {
  const response = await fetch(
    `https://s3.amazonaws.com/courier.com/most-popular-blogs.json`
  );
  const data = await response.json();
  const mostPopularBlogs = data.splice(0, 4);
  return mostPopularBlogs;
}

const GetBlogPost = async ({ slug, isPreview }: Props) => {
  const blogPostId = await getBlogPostId({ slug, isPreview });
  const blogPostDetails = await getBlogPostDetails({ blogPostId, isPreview });
  const mostPopularBlogs = await getMostPopularBlogs();
  const {
    name: tagName,
    slug: tagSlug,
  } = blogPostDetails.tagsCollection.items[0];
  const moreBlogs = await GetSimilarBlogs({ slug: tagSlug, excludeSlug: slug });
  blogPostDetails.moreFromTagName = tagName;
  blogPostDetails.moreBlogs = moreBlogs;
  blogPostDetails.mostPopular = mostPopularBlogs;
  return blogPostDetails;
};

export default GetBlogPost;
