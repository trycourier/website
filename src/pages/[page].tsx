import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/page/Content";
import { NextSeo } from "next-seo";
import GetPageData from "scripts/GetPageData";
import getAllPages from "scripts/GetAllPages";

import { widgetQueries } from "components/pages/page/widgets";

export async function getStaticPaths() {
  const allPages = await getAllPages();
  const allPagesPath = [];
  for (let index = 0; index < allPages.length; index++) {
    const page = allPages[index];
    allPagesPath.push({
      params: { page: page.fields.slug },
    });
  }
  return {
    paths: allPagesPath,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { page } = params;
  const pageDetails = await GetPageData({ slug: page });
  const widgetsData: Record<string, any> = {};
  await Promise.all(
    pageDetails.content.links.entries.block.map(async (block) => {
      if (!block.key || !widgetQueries[block.key]) return;

      const data = await widgetQueries[block.key]();
      widgetsData[block.key] = data;
    })
  );

  return {
    props: { pageDetails, widgetsData },
  };
}

const GeneratedPage = ({
  pageDetails,
  widgetsData,
}: {
  pageDetails: any;
  widgetsData: Record<string, any>;
}) => {
  if (!pageDetails) return <p></p>;
  const { slug, content, title, metaTitle, metaDescription } = pageDetails;
  const pageTitle = `${metaTitle || title} | Courier`;
  const pageDescription = `${metaDescription || ""}`;
  const pageUrl = `https://www.courier.com/${slug}`;

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
      <Content content={content} widgetsData={widgetsData} title={title} />
      <Footer noBanner />
    </>
  );
};

export default GeneratedPage;
