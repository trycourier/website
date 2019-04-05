module.exports = {
  siteMetadata: {
    title: 'Courier',
    description: 'Super powered notifications. Add AI powered omnichannel delivery to your app\'s notifications with a single API call.',
    author: '@trycourier'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'trycourier-com',
        short_name: 'courier',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-symbol.png' // This path is relative to the root of the site.
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },

    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: process.env.INTERCOM_KEY
      }
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8 // for Bootstrap compatability
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`
      }
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark'
  ]
}
