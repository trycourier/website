import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/Single";
import { NextSeo } from "next-seo";
import GetBlogPost from "scripts/GetBlogPost";
import getAllBlogs from "scripts/GetAllBlogs";

export async function getStaticPaths() {
  const allBlogs = await getAllBlogs();
  const allBlogPaths = [];
  for (let index = 0; index < allBlogs.length; index++) {
    const blog = allBlogs[index];
    allBlogPaths.push({
      params: { post: blog.fields.slug },
    });
  }
  return {
    paths: allBlogPaths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { post } = params;
  const postDetails = await GetBlogPost({ slug: post });
  return {
    props: { postDetails },
  };
}

const Blog = ({ postDetails }: { postDetails: any }) => {
  if (!postDetails) return <p></p>;
  const {
    title,
    excerpt,
    slug,
    headerImage,
    metaTitle,
    metaDescription,
  } = postDetails;
  const pageDescription = `${metaDescription || excerpt}`;
  const pageTitle = `${metaTitle || title}`;
  const pageUrl = `https://www.courier.com/blog/${slug}`;
  const pageHeaderImage = `${headerImage.url}?w=1200&h=600&q=50&fit=pad&f=center`;

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          type: "website",
          title: pageTitle,
          description: pageDescription,
          site_name: "Courier",
          images: [{ url: pageHeaderImage }],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@trycourier",
        }}
      />
      <Header headerPlain />
      <Content {...postDetails} />
      <Footer />
    </>
  );
};

export default Blog;
