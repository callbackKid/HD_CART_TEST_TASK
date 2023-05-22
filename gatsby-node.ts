import { GatsbyNode } from 'gatsby'
import { ProductType, ProductNode, QueryType } from './src/types'
import path from 'path'
import products from './src/eshop.json'
//const fetch = require('node-fetch')

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  //const response = await fetch('http://localhost:3001/products')
  //const data: ProductType[] = await response.json()
  products.products.forEach((product: ProductType) => {
    const node = {
      ...product,
      id: createNodeId(`Product-${product.id}`),
      internal: {
        type: 'Product',
        contentDigest: createContentDigest(product),
      },
    }
    createNode(node)
  })
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql<QueryType>(`
    query {
      allProduct {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  data &&
    data.allProduct.edges.forEach(({ node }: ProductNode) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`./src/pages/product.tsx`),
        context: {
          id: node.id,
        },
      })
    })
}
