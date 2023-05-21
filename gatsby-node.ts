import { GatsbyNode } from 'gatsby'
import { ProductType } from './src/types'
const fetch = require('node-fetch')

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const response = await fetch('http://localhost:3001/products')
  const data: ProductType[] = await response.json()
  data.forEach((product: ProductType) => {
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
