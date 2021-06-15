import GetSimilarBlogs from './GetSimilarBlogs';

interface Props {
    slug: string;
}

async function getBlogPostId({slug}: Props) {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: `
        query postEntryQuery {
            postCollection(where: {slug:"${slug}"}) {
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
    const blogPostId = data.data.postCollection.items[0].sys.id;
    return blogPostId;
}

async function getBlogPostDetails({blogPostId}: {blogPostId: string}) {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: `
            query postEntryQuery {
                post(id: "${blogPostId}") {
                    title,
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
                    content {
                        json
                        links {
                            assets {
                                block {
                                    sys { id  }
                                    url
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
        `
        }),
    });
    const data = await response.json();
    let blogPostDetails = data.data.post;
    const blogImages:any = {};
    const imagesArrRaw = data.data.post.content.links.assets.block;
    for (let index = 0; index < imagesArrRaw.length; index++) {
        const thisImage = imagesArrRaw[index];
        blogImages[thisImage.sys.id] = thisImage.url;   
    }
    blogPostDetails.images = blogImages;

    const blogSnippets:any = {};
    const codeSnippetsArrRaw = data.data.post.content.links.entries.block;
    for (let index = 0; index < codeSnippetsArrRaw.length; index++) {
        const thisSnippet = codeSnippetsArrRaw[index];
        blogSnippets[thisSnippet.sys.id] = {
            title: thisSnippet.title,
            language: thisSnippet.language,
            code: thisSnippet.code
        };   
    }
    blogPostDetails.snippets = blogSnippets;

    return blogPostDetails;
}

async function getMostPopularBlogs({slug}: Props) {
    const response = await fetch(`https://s3.amazonaws.com/courier.com/most-popular-blogs.json`);
    const data = await response.json();
    const mostPopularBlogs = data;
    const mostPopularBlogsFiltered = [];
    //skip current blog if included in list
    for (let index = 0; index < mostPopularBlogs.length; index++) {
        const popularBlog = mostPopularBlogs[index];
        if(popularBlog.slug !== slug && mostPopularBlogsFiltered.length < 4) {
            mostPopularBlogsFiltered.push(popularBlog);
        }
    }
    return mostPopularBlogsFiltered;
}

const GetBlogPost = async ({slug}: Props) => {
    const blogPostId = await getBlogPostId({slug});
    const blogPostDetails = await getBlogPostDetails({blogPostId});
    const mostPopularBlogs = await getMostPopularBlogs({slug});
    const {name: tagName, slug: tagSlug } = blogPostDetails.tagsCollection.items[0];
    const moreBlogs = await GetSimilarBlogs({slug: tagSlug, excludeSlug: slug});
    blogPostDetails.moreFromTagName = tagName;
    blogPostDetails.moreBlogs = moreBlogs;
    blogPostDetails.mostPopular = mostPopularBlogs;
    return blogPostDetails;
}

export default GetBlogPost;
