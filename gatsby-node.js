/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

// Create Pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
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

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
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
