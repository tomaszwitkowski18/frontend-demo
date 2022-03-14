const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query GetAllPosts {
      wpcontent {
        posts {
          nodes {
            title
            content
            slug
          }
        }
      }
    }
  `)
  const productTemplate = path.resolve(`src/templates/post.js`)
  queryResults.data.wpcontent.posts.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.slug}`,
      component: productTemplate,
      context: {
        product: node,
      },
    })
  })
}
