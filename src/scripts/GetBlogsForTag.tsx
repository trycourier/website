const contentful = require('contentful')
const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_API_KEY}`
});

async function getAllBlogs() {
    const response = await client.getEntries({content_type: "post", limit: 1000 });
    return response.items;
}

async function filterWithTag({blogs, tag}: {blogs: any[], tag: string}) {
    const blogsWithTag = blogs.filter(blog => {
        const tags = blog.fields.tags;
        const hasCourierLive = tags.find((e: any) => e.fields.slug === tag)
        if(hasCourierLive) { return true; }
    });
    return blogsWithTag;
}

const GetBlogsHomeFeed = async ({tag}: {tag: string}) => {
    const latestBlogs = await getAllBlogs();
    const feedForBlogsWithTag = await filterWithTag({blogs: latestBlogs, tag});
    return {
        slug: tag,
        items: feedForBlogsWithTag
    };
}

export default GetBlogsHomeFeed;