/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Articles
 */

// Markdown items: Create slug and collection nodes based on folder
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/articles${slug}`,
    })
  }
}



/**
 * Generate pages
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query all the data
  const queryResult = await graphql(`
    {
      markdownQuery: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      pageQuery: allWpPage {
        nodes {
          databaseId
          uri
        }
      }
      postQuery: allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            databaseId
            uri
          }
          next {
            databaseId
          }
          previous {
            databaseId
          }
        }
      }
      catQuery: allWpCategory {
        nodes {
          databaseId
          uri
          name
          posts {
            nodes {
              id
            }
          }
        }
      }
    }
  `)
  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  // Generate single page pages
  const pages = queryResult.data.pageQuery.nodes
  pages.forEach(page => {
    createPage({
      path: page.uri,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        databaseId: page.databaseId,
      },
    })
  })

  // Generate single post pages
  const posts = queryResult.data.postQuery.edges
  posts.forEach(post => {
    createPage({
      path: `/posts${post.node.uri}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        databaseId: post.node.databaseId,
        nextId: post.next ? post.next.databaseId : null,
        prevId: post.previous ? post.previous.databaseId : null,
      },
    })
  })

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 4, // How many items you want per page
    pathPrefix: "/posts", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/posts.js`), // Just like `createPage()`
  })

  // Create your paginated category indexes
  const categories = queryResult.data.catQuery.nodes
  categories.map(category => {
    paginate({
      createPage, // The Gatsby `createPage` function
      items: category.posts.nodes, // An array of objects
      itemsPerPage: 4, // How many items you want per page
      pathPrefix: category.uri, // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve(`./src/templates/categories.js`), // Just like `createPage()`
      context: {
        catId: category.databaseId,
        catName: category.name,
      },
    })
  })
}
