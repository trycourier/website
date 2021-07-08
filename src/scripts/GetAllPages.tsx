import client from "./contentfulClient";

const GetAllBlogs = async () => {
  const response = await client.getEntries({
    content_type: "textPage",
    limit: 1000,
  });
  return response.items;
};

export default GetAllBlogs;
