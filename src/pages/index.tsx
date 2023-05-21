import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Seo from '../components/Seo'
import { ProductNode, QueryType } from '../types'
import { Title } from './title'
import './styles.css'

const IndexPage: React.FC<PageProps<ProductNode>> = () => {
  const data: QueryType = useStaticQuery(graphql`
    query {
      allProduct {
        edges {
          node {
            id
            description
            image
            price
            title
          }
        }
      }
    }
  `)
  console.log(data.allProduct.edges)
  // Event to go to an article page with keyboard
  return (
    <div>
      <Title />
      <main role="main" className="products-grid">
        {data.allProduct.edges.map((product) => (
          <article key={product.node.id} className="product-card" tabIndex={0} role="button">
            <h2>{product.node.title}</h2>
            <p>Price: ${product.node.price}</p>
            <p>{product.node.description}</p>
            <img className="image" src={product.node.image} alt={product.node.title} />
          </article>
        ))}
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="HD cart" />
