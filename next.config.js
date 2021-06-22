const withPWA = require("next-pwa");
const redirects = require('./redirects');
const headers = require('./headers');

module.exports = withPWA({
  async redirects() {
    return redirects
  },
  async headers() {
    return process.env.NODE_ENV === "development" ? [] : headers
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
      process.env.NODE_ENV === "production",
      // delete two lines above to enable PWA in production deployment
      // add your own icons to public/manifest.json 
      // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
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
