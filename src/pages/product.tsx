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
    <div className="product-page">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">Price : {product.price}$</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage
