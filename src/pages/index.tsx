import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link, graphql, useStaticQuery } from 'gatsby'
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

  // Event to go to an article page with keyboard

  return (
    <div>
      <Title className="title" />
      <main role="main" className="products-grid">
        {data.allProduct.edges.map((product) => (
          <article key={product.node.id} className="product-card" tabIndex={0} role="button">
            <Link className="product-link" to={`/${product.node.id}`}>
              <h2>{product.node.title}</h2>
              <img className="image" src={product.node.image} alt={product.node.title} />
              <p>Price: ${product.node.price}</p>
              <p>{product.node.description}</p>
            </Link>
          </article>
        ))}
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="HD cart" />
