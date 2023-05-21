import * as React from 'react'
import { ProductType } from '../types'

export const ProductPage = (props: ProductType) => {
  return (
    <main>
      <p>{props.title}</p>
    </main>
  )
}
