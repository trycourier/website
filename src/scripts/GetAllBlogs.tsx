import client from "./contentfulClient";

const GetAllBlogs = async () => {
  const response = await client.getEntries({
    content_type: "post",
    limit: 1000,
    order: "-sys.createdAt",
  });
  return response.items;
};

export default GetAllBlogs;
