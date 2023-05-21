import * as React from 'react'
import { ProductType } from '../types'
import { graphql } from 'gatsby'

type ProductPageProps = {
  data: {
    product: ProductType
  }
}

export const query = graphql`
  query ($id: String!) {
    product(id: { eq: $id }) {
      id
      title
      description
      price
      image
    }
  }
`

const ProductPage: React.FC<ProductPageProps> = ({ data }) => {
  const product = data.product
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p> Price : {product.price}$</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductPage
