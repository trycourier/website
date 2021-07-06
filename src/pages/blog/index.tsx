import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/home/Content";
import Hero from "components/pages/blog/home/Hero";
import Newsletter from "components/pages/blog/common/Newsletter";
import { NextSeo } from "next-seo";
import GetBlogsHomeFeed from "scripts/GetBlogsHomeFeed";

export async function getStaticProps(context: any) {
  const feedContent = await GetBlogsHomeFeed();
  return {
    props: { feedContent },
    revalidate: 60,
  };
}

const Blog = ({ feedContent }: { feedContent: any }) => {
  if (!feedContent) return <p></p>;
  const pageTitle = "Blog | Courier";
  const pageDescription = "Latest posts from Courier.com's blog.";
  const pageUrl = `https://www.courier.com/blog`;

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
          images: [{ url: "https://www.courier.com/images/og-image.png" }],
        }}
        twitter={{
          cardType: "summary",
          site: "@trycourier",
        }}
      />
      <Header headerPlain />
      <Hero />
      <Newsletter />
      <Content feedContent={feedContent} />
      <Footer />
    </>
  );
};

export default Blog;
