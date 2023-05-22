import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Title = ({ className }: { className: string }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <h1 className={className}>{data.site.siteMetadata.title}</h1>
}

export default Title
