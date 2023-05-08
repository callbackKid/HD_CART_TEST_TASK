import { CreateResolversArgs, GatsbyNode } from 'gatsby'
import products from './src/eshop.json'
import { ProductType } from './src/types'

const gatsbyNode: GatsbyNode = {
  createSchemaCustomization: ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type Product implements Node {
        id: Float!
        title: String!
        price: Float!
        description: String!
        image: String!
      }
    `
    createTypes(typeDefs)
  },

  createResolvers: ({ createResolvers }: CreateResolversArgs) => {
    const resolvers = {
      Query: {
        allProducts: {
          type: ['Product'],
          resolve: () => {
            return products.map((product: ProductType) => {
              return {
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
              }
            })
          },
        },
      },
    }
    createResolvers(resolvers)
  },
}

exports.createSchemaCustomization = gatsbyNode.createSchemaCustomization
exports.createResolvers = gatsbyNode.createResolvers
