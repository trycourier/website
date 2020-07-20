/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

// Customize Schema
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        hidden: {
          type: "String",
          resolve(source, args, context, info) {
            return source.hidden === "true" ? "true" : "false"
          }
        },
        headerImage: {
          type: "String",
          resolve(source, args, context, info) {
            const { headerImage } = source
            return headerImage || "https://www.fillmurray.com/220/160"
          }
        },
        thumbnail: {
          type: "String",
          resolve(source, args, context, info) {
            const { thumbnail } = source
            return thumbnail || "https://www.fillmurray.com/220/160"
          }
        },
        tags: {
          type: "[String!]",
          resolve(source, args, context, info) {
            // For a more generic solution, you could pick the field value from
            // `source[info.fieldName]`
            const { tags } = source
            if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
              return ["Uncategorized"]
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
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
            title
          }
        }
      }
      allContentfulAuthor {
        edges {
          node {
            name
            slug
          }
        }
      }
      allContentfulTag {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  const posts = result.data.allContentfulPost.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogPost,
      context: {
        slug: node.slug,
      },
    })
  })

  const authors = result.data.allContentfulAuthor.edges
  authors.forEach(({node}) => {
    console.log('author:', node.name);
    createPage({
      path: `blog/authors/${node.slug}`,
      component: path.resolve(`./src/templates/author.tsx`),
      context: {
        author: node,
        authorId: node.slug
      },
    })
  })

  const tags = result.data.allContentfulTag.edges
  tags.forEach(({node}) => {
    createPage({
      path: `blog/tags/${node.name}`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        tag: node,
        tagId: node.id
      }
    })
  })
}
