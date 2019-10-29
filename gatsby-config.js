module.exports = {
  siteMetadata: {
    title: 'Courier',
    description: 'Courier sends your product\'s user notifications to the best channel for each user. Add any notification channel – like SMS, push, Slack, and WhatsApp – to your app with just a single API call.',
    author: '@trycourier'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Nunito Sans'
          }
        ]
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: process.env.SEGMENT_KEY,
        trackPage: true
      }
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: process.env.INTERCOM_KEY
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://4d0fad4157b14d46af354f5158e5e69c@sentry.io/1801028",
        environment: process.env.CONTEXT || 'development'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'trycourier-dot-com',
        short_name: 'courier',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/favicon/favicon-96x96.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
