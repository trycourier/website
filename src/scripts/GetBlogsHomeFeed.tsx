const contentful = require('contentful')
const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_API_KEY}`
});

async function getAllBlogs() {
    const response = await client.getEntries({content_type: "post", limit: 1000 });
    return response.items;
}

async function filterForHomepage({blogs}: {blogs: any[]}) {
    const courierLiveBlogs = blogs.filter(blog => {
        const tags = blog.fields.tags;
        const hasCourierLive = tags.find((tag: any) => tag.fields.slug === "courier-live")
        if(hasCourierLive) { return true; }
    })

    const nonCourierLiveBlogs = blogs.filter(blog => {
        const tags = blog.fields.tags;
        const hasCourierLive = tags.find((tag: any) => tag.fields.slug === "courier-live");
        if(!hasCourierLive) { return true; }
    })
    const topFeatured = nonCourierLiveBlogs.splice(0, 4);
    const bottomFeatured = nonCourierLiveBlogs.splice(0, 4);
    const courierLive = courierLiveBlogs.splice(0, 3);

    return {
        topFeatured, 
        bottomFeatured,
        courierLive
    }
}

const GetBlogsHomeFeed = async () => {
    const latestBlogs = await getAllBlogs();
    const homepageFeed = await filterForHomepage({blogs: latestBlogs});
    return homepageFeed;
}

export default GetBlogsHomeFeed;
