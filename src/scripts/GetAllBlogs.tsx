const contentful = require('contentful');
const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_API_KEY}`
});

const GetAllBlogs = async () => {
    const response = await client.getEntries({content_type: "post", limit: 1000 });
    return response.items;
};

export default GetAllBlogs;