import getAllBlogs from './GetAllBlogs';

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
