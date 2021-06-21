const withPWA = require("next-pwa");
const redirects = require('./redirects');

module.exports = withPWA({
  async redirects() {
    return redirects
  },
  poweredByHeader: false,
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
      process.env.NODE_ENV === "production",
    dest: "public",
    register: true,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.mdx/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: pluginOptions.options,
          },
        ],
      })
  
      return config
    },
  },
  target: "serverless",
});
