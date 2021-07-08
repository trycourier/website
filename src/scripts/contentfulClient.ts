const contentful = require("contentful");

const client = contentful.createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_API_KEY}`,
});

export default client;
