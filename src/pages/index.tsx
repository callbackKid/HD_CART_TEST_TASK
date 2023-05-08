import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Seo from '../components/Seo'
import { IndexPageData } from '../types'
import { Title } from './title'

const IndexPage: React.FC<PageProps<IndexPageData>> = () => {
  const data: IndexPageData = useStaticQuery(graphql`
    query {
      allProducts {
        id
        title
        price
        description
        image
      }
    }
  `)

  return (
    <div>
      <Title />
      <h1>Products</h1>
      {data.allProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="HD cart" />
