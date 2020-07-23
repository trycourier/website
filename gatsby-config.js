module.exports = {
  siteMetadata: {
    siteUrl: `https://www.trycourier.com`,
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
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Bebas Neue",
            variants: [`400`],
          },
          {
            family: "Roboto",
            variants: [`400`, `700`],
          },
        ],
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
        icon: "static/favicon/favicon-96x96.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "z7iqk1q8njt4",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
