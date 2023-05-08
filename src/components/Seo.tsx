import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  title: string
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  )
}

export default Seo
