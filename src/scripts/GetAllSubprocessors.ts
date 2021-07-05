const contentful = require("contentful");
const client = contentful.createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_API_KEY}`,
});

export interface Subprocessor {
  fields: {
    name: string;
    description: string;
    location: string;
  };
  sys: {
    id: string;
  };
}

const GetAllSuprocessors = async (): Promise<Subprocessor[]> => {
  const response = await client.getEntries({
    content_type: "subprocessor",
    limit: 1000,
    order: "fields.name",
  });
  return response.items;
};

export default GetAllSuprocessors;
