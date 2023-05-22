import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Seo from '../components/Seo'
import { ProductNode, QueryType } from '../types'
import Title from './title'
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

  return (
    <div>
      <Title className="title" />
      <main role="main" className="products-grid">
        {data.allProduct.edges.map((product) => (
          <article key={product.node.id} className="product-card" tabIndex={0} role="button">
            <Link tabIndex={0} role="link" className="product-link" to={`/${product.node.id}`}>
              <h2 tabIndex={0}>{product.node.title}</h2>
              <img className="image" src={product.node.image} alt={product.node.title} />
              <p tabIndex={0}>Price: ${product.node.price}</p>
              <p tabIndex={0}>{product.node.description}</p>
            </Link>
          </article>
        ))}
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="HD cart" />
