import getAllBlogs from "./GetAllBlogs";

async function filterWithTag({ blogs, tag }: { blogs: any[]; tag: string }) {
  const blogsWithTag = blogs.filter((blog) => {
    const tags = blog.fields.tags;
    const hasTag = tags.find((e: any) => e.fields.slug === tag);
    if (hasTag) {
      return true;
    }
  });
  return blogsWithTag;
}

const GetBlogsHomeFeed = async ({ tag }: { tag: string }) => {
  const latestBlogs = await getAllBlogs();

  const feedForBlogsWithTag = await filterWithTag({ blogs: latestBlogs, tag });
  return {
    slug: tag,
    items: feedForBlogsWithTag,
  };
};

export default GetBlogsHomeFeed;
