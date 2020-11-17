require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.courier.com`,
    title: "Courier",
    description:
      "Courier is the smartest way to design and deliver notifications. Design once, and deliver to any channel – email, Slack, SMS, push, and more – through one API.",
    author: "@trycourier",
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com/trycourier`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/trycourier`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/trycourier`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/trycourier`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bebas Neue`, `Roboto\:wght@400;700`],
        display: "swap",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-segment-js",
      options: {
        prodKey: process.env.SEGMENT_KEY,
        trackPage: true,
      },
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: process.env.INTERCOM_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["CONTEXT", "DEPLOY_ID"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "trycourier-dot-com",
        short_name: "courier",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/favicon/favicon-32x32.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "z7iqk1q8njt4",
        accessToken:
          process.env.CONTENTFUL_ACCESS_TOKEN ||
          "NieQ2Z92R-_-GxHVtPrZTR7kAjn2KeLbrQWz12XV570",
        host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
