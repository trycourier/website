import { NextApiRequest, NextApiResponse } from "next";
const contentful = require('contentful')
const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_API_KEY}`
});

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const {query} = req.query;
    const response = await client.getEntries({
        query,
        content_type: "post", 
        limit: 1000 
    });
    const rawItems = response.items;
    const returnItems = [];
    for (let index = 0; index < rawItems.length; index++) {
        const item = rawItems[index];
        const { title, slug, tags } = item.fields;
        const tag = tags[0].fields.name;
        returnItems.push({
            title, slug, tag
        })
    }
    res.statusCode = 200;
    return res.json({ results: returnItems });
};