import getAllBlogs from "./GetAllBlogs";

async function filterForHomepage({ blogs }: { blogs: any[] }) {
  const topFeatured = blogs.splice(0, 4);
  const bottomFeatured = blogs.splice(0, 4);

  return {
    topFeatured,
    bottomFeatured,
  };
}

const GetBlogsHomeFeed = async () => {
  const latestBlogs = await getAllBlogs();
  const homepageFeed = await filterForHomepage({ blogs: latestBlogs });
  return homepageFeed;
};

export default GetBlogsHomeFeed;
