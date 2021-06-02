const contentful = require('contentful');
const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_API_KEY}`
});

async function getAllBlogs() {
    const response = await client.getEntries({content_type: "post", limit: 1000 });
    return response.items;
}

async function filterWithTag({blogs, slug, excludeSlug}: {blogs: any[], slug: string, excludeSlug: string}) {
    const blogsWithTag = blogs.filter(blog => {
        const tags = blog.fields.tags;
        const thisBlogSlug = blog.fields.slug;
        const tagsMatch = tags.find((e: any) => e.fields.slug === slug);
        if(tagsMatch && excludeSlug !== thisBlogSlug) return true;
    });
    return blogsWithTag;
}

const GetSimilarBlogs = async ({slug, excludeSlug}: {slug: string, excludeSlug: string}) => {
    const latestBlogs = await getAllBlogs();
    const similarBlogs = await filterWithTag({blogs: latestBlogs, slug, excludeSlug});
    return similarBlogs.splice(0, 2);
}

export default GetSimilarBlogs;