import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/tag/Content";
import Hero from "components/pages/blog/tag/Hero";
import { NextSeo } from "next-seo";
import GetBlogsForTag from "scripts/GetBlogsForTag";
import menuData from "components/pages/blog/common/Menu/data";
import Newsletter from "components/pages/blog/common/Newsletter";

export async function getStaticPaths() {
  const allTagPaths = [
    { params: { tag: "courier" } },
    { params: { tag: "courier-live" } },
    { params: { tag: "engineering" } },
    { params: { tag: "integrations" } },
    { params: { tag: "news-and-updates" } },
    { params: { tag: "notifications-landscape" } },
  ];
  return {
    paths: allTagPaths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { tag } = params;
  const feedContent = await GetBlogsForTag({ tag: tag });
  return {
    props: { feedContent },
  };
}

const Blog = ({ feedContent }: { feedContent: any }) => {
  if (!feedContent) return <p></p>;
  const tagName = menuData.find((e) => e.slug === feedContent.slug)!.name;
  const pageTitle = `${tagName} | Courier Blog`;
  const pageDescription = "";

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        noindex
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
      <Hero slug={feedContent.slug} />
      <Newsletter />
      <Content feedContent={feedContent.items} slug={feedContent.slug} />
      <Footer />
    </>
  );
};

export default Blog;
