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
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
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
            slug
          }
        }
      }
      allContentfulTag {
        edges {
          node {
            slug
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

  const textPageTemplates = {
    basic: path.resolve(`./src/templates/text-pages/basic.tsx`)
  }
  const textPages = result.data.allContentfulPage.edges
  textPages.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: textPageTemplates.basic,
      context: {
        id: node.id,
        slug: node.slug
      },
    })
  })

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const posts = result.data.allContentfulPost.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogPost,
      context: {
        slug: node.slug
      },
    })
  })

  const authors = result.data.allContentfulAuthor.edges
  authors.forEach(({node}) => {
    createPage({
      path: `blog/authors/${node.slug}`,
      component: path.resolve(`./src/templates/author.tsx`),
      context: {
        slug: node.slug
      },
    })
  })

  const tags = result.data.allContentfulTag.edges
  tags.forEach(({node}) => {
    createPage({
      path: `blog/tags/${node.slug}`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        slug: node.slug
      }
    })
  })
}
