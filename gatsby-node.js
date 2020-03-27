/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Customize Schema
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        author: {
          type: "String",
          resolve(source, args, context, info) {
            const { author } = source
            return author || "Courier"
          }
        },
        headerImage: {
          type: "String",
          resolve(source, args, context, info) {
            const { headerImage } = source
            return headerImage || "http://www.fillmurray.com/220/160"
          }
        },
        thumbnail: {
          type: "String",
          resolve(source, args, context, info) {
            const { thumbnail } = source
            return thumbnail || "http://www.fillmurray.com/220/160"
          }
        },
        tags: {
          type: "[String!]",
          resolve(source, args, context, info) {
            // For a more generic solution, you could pick the field value from
            // `source[info.fieldName]`
            const { tags } = source
            if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
              return ["uncategorized"]
            }
            return tags
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

// Create Pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `blog${slug}`,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
