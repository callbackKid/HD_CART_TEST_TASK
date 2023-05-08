import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export const Title = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <>{data.site.siteMetadata.title}</>
}
